import React, { Component } from 'react';
import { Link } from 'react-router';

export default class OrderList extends Component {

  componentWillMount() {
    this.props.actions.push_location(this.props.location, '订单');
  }
  render() {
    return (
      <div>
        OrderList, <Link to="/orders/1">Order#1</Link>
      </div>
    );
  }
}
