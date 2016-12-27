import React, { Component } from 'react';
import avators from '../components/avators';

export default class CustomerDetail extends Component {
  componentWillMount() {
    this.props.actions.push_location(this.props.location, 'Jackson');
    console.log(avators[0]);
  }
  render() {
    var avator = (<img src="/media/placeholder.png" width="90" height="90" />);
    return (
    <div className="">
      <div className="" >
        <div className="row" style={{borderBottom: "1px solid silver"}}>
          <div className="col-md-4">
              <button type="button" className="btn btn-primary">编辑</button>
              <button type="button" className="btn btn-default">创建</button>
          </div>
          <div className="col-md-4 text-center">
            <div className="btn-group">
              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  打印 <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">打印预览</a></li>
                  <li><a href="#">打印</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  动作 <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">删除</a></li>
                  <li><a href="#">复制</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">订单</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <span>1/6&nbsp;&nbsp;</span>
            <div className="btn-group">
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
            </div>
          </div>
        </div>
      </div> 
      <div className="o_form_view">
        <div className="o_form_sheet">
        <h3>username<div className="pull-left">{avator}</div></h3>
          <table className="table">
            <tbody>
              <tr>
                <td rowSpan="3"><b>地址</b></td>
                <td rowSpan="3">
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                    1355 Market Street, Suite 900<br/>
                    San Francisco, CA 94103<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </td>
                <td><b>电话</b></td><td>hi</td>
              </tr>
              <tr>
                <td><b>手机</b></td><td>+86 13311111111</td>
              </tr>
              <tr>
                <td><b>传真</b></td><td>+86 13311111111</td>
              </tr>
              <tr>
                <td>网站</td><td>http://www.baidu.com</td>
                <td><b>Email</b></td>
                <td><a href="mailto:jason@yourcompanny.com">jason@yourcompanny.com</a></td>
              </tr>
              <tr>
                <td>标签</td><td><span className="badge">合作伙伴</span></td>
                <td>语言</td><td>Chinese(CN)/简体中文</td>
              </tr>
            </tbody>
          </table>
          
          <div>
            <div role="tabpanel">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a href="#home" aria-controls="home" role="tab" data-toggle="tab">联系人&amp;地址</a>
                </li>
                <li role="presentation">
                  <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">内部备注</a>
                </li>
              </ul>
            
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="home">...</div>
                <div role="tabpanel" className="tab-pane" id="tab">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
