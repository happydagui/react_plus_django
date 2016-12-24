import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import OrderForm from './OrderForm';
import Workbench from './Workbench';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Workbench} />
  		<Route path="order" component={OrderForm} />
  	</Route>
  </Router>,
  document.getElementById('app')
);
