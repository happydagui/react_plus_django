import React, { Component } from 'react';

export default class OrderDetail extends Component {
  componentWillMount() {
    this.props.actions.push_location(this.props.location, 'orders#1');
  }
  render() {
    return (
      <div className="aform">
        Order#{this.props.params.orderId} detail
      </div>
    );
  }
}
