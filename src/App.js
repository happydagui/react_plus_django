import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Link, IndexLink} from 'react-router';
import ajax from 'superagent';
// import logo from './logo.svg';
import './App.css';

import * as actions from './actions';
import {locationsAreEqual} from './reducers';

class App extends Component {
  componentWillMount() {
    // this.props.actions.push_location(this.props.location);
    // console.log(new Date()); // singleton
    // console.log(this.props.location);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('form submitted');
  }
  render() {
    return (
      <div className="" style={{flex:1, display:'flex', flexDirection:'column'}}>
        <nav className="navbar navbar-inverse" style={{display: 'block'}}>
          <div className="container-fluid" style={{width:'100%'}}>
            {/*<a className="navbar-brand" href="#">ODOO</a>*/}
            <ul className="nav navbar-nav">
              <li className={this.props.location.pathname=='/'?'active':''}>
                <Link to="/">主页</Link>
              </li>
              <li className={this.props.location.pathname=='/customers'?'active':''}>
                <Link to="/customers">客户</Link>
              </li>
              <li>
                <a href="#">报表</a>
              </li>
              <li>
                <a href="#">设置</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid" style={{marginTop: '-20px',width:'100%', display:'block', flex: 1}}>
          <div className="row" style={{height:"100%"}}>
              <div className="col-md-2" style={{borderRight: "1px solid silver", height:"100%"}}>
                <div>
                  <img src="/media/company_logo.png" alt=""/>
                </div>
                <ul className="list-unstyled">
                  <li><Link to="/">仪表盘</Link></li>
                  <li>销售<ul className="list-unstyle">
                    <li><Link to="/customers">客户</Link></li>
                  </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-10">
                <div className="row">
                  <ol className="breadcrumb col-md-8 lead">
                    {this.props.breadcrumbs.map((nav)=>{
                      return locationsAreEqual(this.props.location, nav.location)?
                      <li>{nav.title}</li>:<li><Link to={nav.location.pathname}>{nav.title}</Link></li>;
                    })}
                  </ol>
                  <div className="col-md-4">
                    <form action="" method="POST" className="form-inline" role="form" onSubmit={this.onSubmit.bind(this)}>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </span>
                        <input ref={(ref)=>this.q=ref} type="text" className="form-control" placeholder="搜索..."/>
                      </div>    
                    </form>
                  </div>
                </div>
                {/*this.props.children*/}
                {React.cloneElement(this.props.children, this.props)}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cdr: state.customers,
    sdr: state.serviceitems,
    breadcrumbs: state.navigation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)