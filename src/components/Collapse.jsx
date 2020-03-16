/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/static-property-placement */

import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  static defaultProps = {
    opened: true,
  };

  constructor(props) {
    super(props);
    this.state = { isShown: props.opened };
  }

  toggleText = (e) => {
    e.preventDefault();
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  };

  render() {
    const { isShown } = this.state;
    const { text } = this.props;
    const classes = cn({
      collapse: true,
      show: isShown,
    });

    return (
      <div>
        <p>
          <a className="btn btn-primary m-4" href="#" onClick={this.toggleText}>Link with href</a>
        </p>
        <div className={classes}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}
