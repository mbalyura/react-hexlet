import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  removeItem = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, text } = this.state;
    this.setState({ items: [{ id: uniqueId(), value: text }, ...items], text: '' });
  }

  render() {
    const { items, text } = this.state;
    return (
      <div className="m-5">
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input onChange={this.handleChange} value={text} type="text" required className="form-control mr-3" placeholder="I am going..." />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {items.map(({ id, value }) => (
          <Item
            key={id}
            onRemove={this.removeItem}
            id={id}
            value={value}
          />
        ))}
      </div>
    );
  }
}
