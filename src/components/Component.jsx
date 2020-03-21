import { uniqueId } from 'lodash';
import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], count: 0 };
  }

  removeItem = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  }

  handleClick = (diff) => () => {
    const { items, count } = this.state;
    const newCount = count + diff;
    this.setState({ items: [{ id: uniqueId(), value: newCount }, ...items], count: newCount });
  }

  renderButtons({ id, value }) {
    return (
      <button onClick={this.removeItem(id)} key={id} type="button" className="list-group-item list-group-item-action">
        {value}
      </button>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div className="m-3">
        <div className="btn-group" role="group">
          <button onClick={this.handleClick(1)} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleClick(-1)} type="button" className="btn hexlet-dec">-</button>
        </div>
        {items.length !== 0
          && (
            <div className="list-group">
              {items.map((item) => this.renderButtons(item))}
            </div>
          )}
      </div>
    );
  }
}
