import cn from 'classnames';
import React from 'react';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  onClickLeft = () => {
    const { active } = this.state;
    if (active === 'left') return;
    this.setState({ active: 'left' });
  };

  onClickRight = () => {
    const { active } = this.state;
    if (active === 'right') return;
    this.setState({ active: 'right' });
  };

  render() {
    const commonClass = { btn: true, 'btn-secondary': true };
    const buttonLeftClass = cn(commonClass, { left: true, active: this.state.active === 'left' });
    const buttonRightClass = cn(commonClass, { right: true, active: this.state.active === 'right' });

    return (
      <div className="m-3 btn-group" role="group">
        <button type="button" className={buttonLeftClass} onClick={this.onClickLeft}>
          Left
        </button>
        <button type="button" className={buttonRightClass} onClick={this.onClickRight}>
          Right
        </button>
      </div>
    );
  }
}
