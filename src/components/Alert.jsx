import cn from 'classnames';
import React from 'react';

export default class Alert extends React.Component {
  render() {
    const { text, type } = this.props;
    const alertClass = cn({
      'mt-4': true,
      alert: true,
      [`alert-${type}`]: true,
    });
    return <div className={alertClass} role="alert">{text}</div>;
  }
}
