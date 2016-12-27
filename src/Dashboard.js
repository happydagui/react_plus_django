import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Dashboard extends Component {
  componentWillMount() {
    this.props.actions.push_location(this.props.location, '仪表盘');
  }
  render() {
    return (
      <div className="">
        <ul>
          <li><Link to="/customers">客户</Link></li>
          <li><Link to="/orders">订单</Link></li>
        </ul>
      </div>
    );
  }
}
