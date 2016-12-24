import React, { Component } from 'react';

export class OrderForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: ["Deluxe Bicycle", "Super Deluxe Trampoline", "Super Duper Scooter"]
    };
  }
  addItem() {
    console.log('add a item');
  }
  render() {
    var ds = JSON.stringify(this.state.data);
    return (
      <div>
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li className="active">Current</li>
        </ol>
        <h3>John</h3>
        <div className="row">
          <form action="" method="POST" className="form-inline" role="form">
          
            <div className="form-group">
              <label className="sr-only" htmlFor="">label</label>
              <input type="text" data-provide="typeahead" className="form-control" id="" placeholder="Input field"
               data-source={ds} />

            </div>
          
            <button type="button" onClick={this.addItem.bind(this)} className="btn btn-primary">Add</button>
          </form>
        </div>
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
    );
  }
}
export default OrderForm;
