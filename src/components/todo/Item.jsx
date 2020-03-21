import React from 'react';

export default class Item extends React.Component {
  render() {
    const { id, value, onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div>
            <button onClick={onRemove(id)} type="button" className="btn btn-primary btn-sm">-</button>
          </div>
          <div className="col-10">{value}</div>
        </div>
        <hr />
      </div>
    );
  }
}
