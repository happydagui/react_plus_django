import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware,compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import CustomerList from './views/CustomerList';
import CustomerDetail from './views/CustomerDetail';
import OrderList from './views/OrderList';
import OrderDetail from './views/OrderDetail';

import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

hashHistory.listen((location)=>{
	// console.log(location);
});

ReactDOM.render(
  <Provider store={store}>
	  <Router history={hashHistory}>
	  	<Route path="/" component={App}>
	  		<IndexRoute component={Dashboard} />
	  		<Route path="customers">
	  			<IndexRoute component={CustomerList} />
	  			<Route path=":customerId" component={CustomerDetail} />
	  		</Route>
	  		<Route path="orders">
	  			<IndexRoute component={OrderList} />
	  			<Route path=":orderId" component={OrderDetail} />
	  		</Route>
	  	</Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);
