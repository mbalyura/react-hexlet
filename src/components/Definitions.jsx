import { uniqueId } from 'lodash';
import React from 'react';

export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) return null;

    const func = (item) => (
      <>
        <dt key={uniqueId()}>{item.dt}</dt>
        <dd key={uniqueId()}>{item.dd}</dd>
      </>
    );

    return <dl className="ml-4" key={uniqueId()}>{data.map(func)}</dl>;
  }
}