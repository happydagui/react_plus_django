import React, { Component } from 'react';
import {Link} from 'react-router';
import ajax from 'superagent';
// import logo from './logo.svg';
import './App.css';

class Workbench extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      users: []
    };
  }

  onSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  componentDidMount() {
    ajax.get('/api/v1/users/?format=json').end((error, response)=> {
      if(!error && response) {
        console.log(response.body.results);
        this.setState({
          users: response.body.results
        });
      }
    });
  }
  render() {
    return (
      <div className="">
          <div className="bg-info" style={{padding: "15px"}}>
            <h3>客户
              <div className="pull-right">
                <form action="" method="POST" className="form-inline" role="form" onSubmit={this.onSubmit.bind(this)}>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </span>
                    <input type="text" className="form-control" placeholder="输入手机号或车牌号"/>
                  </div>    
                </form>
              </div>
            </h3>
            <div>
              <button type="button" className="btn btn-primary btn-sm">创建</button>
              <div className="btn-group pull-right">
                <button type="button" className="btn btn-default btn-sm"><i className="glyphicon glyphicon-list"></i></button>
                <button type="button" className="btn btn-default btn-sm"><i className="glyphicon glyphicon-modal-window"></i></button>
              </div>
            </div> 
        </div>
        <table className="table table-striped">
          <thead><tr><th>客户编号</th><th>姓名</th><th>车牌号</th><th>手机</th></tr></thead>
          <tbody>
          {this.state.users.map(usr=>{
            return (<tr key={usr.username}><td>20160012</td><td><Link to="/order">{usr.username}</Link></td><td>粤AD9W62</td><td>13811111111</td><td>{usr.username}</td></tr>);
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Workbench;
