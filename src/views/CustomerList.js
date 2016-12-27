import React, { Component } from 'react';
import {Link} from 'react-router';
import ajax from 'superagent';

class CustomerList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      view_type: 'kanban'
    };
  }

  onSubmit(e) {
    // console.log(e);
    console.log(this.q.value);
    e.preventDefault();
    this.q.value?this.props.actions.add_customer({username: this.q.value}):console.log('no input');
  }

  setViewType(view_type) {
    this.setState({
      view_type: view_type
    });
  }

  componentDidMount() {
    // console.log(this.props.location);
    this.props.actions.push_location(this.props.location, '客户');
    ajax.get('/api/v1/users/?format=json').end((error, response)=> {
      if(!error && response) {
        // console.log(response.body.results);
        // this.setState({
        //   users: response.body.results
        // });
        this.props.actions.set_customers(response.body.results);
      }
    });
  }

  render() {
    let view = this.state.view_type=='list'?(
        <table className="table table-striped">
          <thead><tr><th>客户编号</th><th>姓名</th><th>车牌号</th><th>手机</th></tr></thead>
          <tbody>
          {this.props.cdr.customers.map(usr=>{
            return (<tr key={usr.username}><td>20160012</td><td><Link to="/orders">{usr.username}</Link></td><td>粤AD9W62</td><td>13811111111</td><td>{usr.username}</td></tr>);
          })}
          </tbody>
        </table>): (
        <div className="row" style={{padding: '5px'}}>
          {this.props.cdr.customers.map(usr=>{
            return (<div className="media col-md-4 col-sm-2 kanban">
                        <Link to="/customers/1">
                          <div className="media-left"><img className="media-object" width="64" src="/media/circle.png" alt="Image" /></div>
                          <div className="media-body">
                            <h4 className="media-heading">{usr.username}</h4>
                            <p>上海, 中国<br/>john@yourcompanny.com</p>
                            <p>
                              <span className="badge"><i className="glyphicon glyphicon-star"></i>4</span>
                              <span className="badge"><i className="glyphicon glyphicon-yen"></i>2</span>
                            </p>
                          </div>
                        </Link>
                      </div>);
          })}
        </div>
        );

    return (
      <div className="">
          <div className="">
            <div style={{borderBottom: "1px solid silver", paddingBottom:"5px"}}>
              <button type="button" className="btn btn-primary btn-sm">创建</button>
              <div className="btn-group pull-right">
                <button onClick={this.setViewType.bind(this, 'kanban')} type="button" className="btn btn-default btn-sm"><i className="glyphicon glyphicon-th-large"></i></button>
                <button onClick={this.setViewType.bind(this, 'list')} type="button" className="btn btn-default btn-sm"><i className="glyphicon glyphicon-th-list"></i></button>
              </div>
            </div> 
            {view}
          </div>
      </div>
    );
  }
}

export default CustomerList;
