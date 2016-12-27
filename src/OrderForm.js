import React, { Component } from 'react';
import {IndexLink, Link} from 'react-router';

export class OrderForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: ["工时费", "更换机油", "Super Duper Scooter"]
    };
  }
  addItem() {
    console.log('add a item');
  }

  componentDidMount() {
    // console.log(this.props.location);
    this.props.actions.push_location(this.props.location, 'orderform');

  }
  render() {
    var ds = JSON.stringify(this.state.data);
    return (
      <div>        
        <table className="table">
        <tbody>
          <tr><td><b>客户名称</b></td><td>王女士</td><td><b>联系电话</b></td><td>18675881372</td></tr>
          <tr><td><b>车牌号码</b></td><td>粤AD9W66</td><td><b></b></td><td></td></tr>
        </tbody>
        </table>
        <div className="aform">
          <table className="table table-striped">
        <tbody>
          <tr><td><b>到店时间</b></td><td>2016/12/24</td><td><b>预约</b></td><td>是</td></tr>
          <tr><td><b>服务类型</b></td><td>5000公里保养</td><td><b></b></td><td></td></tr>
        </tbody>
        </table>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>项目</th><th>数量</th><th>单价</th><th>折扣</th><th>小计</th>
              </tr>
            </thead>
            <tbody>
            {this.state.data.map(function(it, index) {
              return (
                <tr key={index}>
                <td>{it}</td><td>2</td><td>100.00</td><td>0.75</td><td>150.00</td>
              </tr>
                );
            })}
              
            </tbody>
            <tfoot>
              <tr><td className="text-right" colSpan="4">合计：</td><td>￥100.00</td></tr>
              </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
export default OrderForm;
