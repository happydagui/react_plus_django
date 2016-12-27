import {combineReducers} from 'redux';
import update from 'react-addons-update';
// import {locationsAreEqual} from 'history/lib/LocationUtils';

const INITIAL_STATE_CUSTOMERS = {
  customers: [],
  filter: '',
  currentCustomer: {},
  currentOrder: {},
  orderHistories: [],
  routeHistories: []
};

export function locationsAreEqual(a, b) {
  // @see locationsAreEqual in LocationUtils
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
};

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export function customers(state = INITIAL_STATE_CUSTOMERS, action) {
  switch (action.type) {
    case 'add_customer':
      return update(state, {customers: {$push: [action.payload]}});
    case 'set_customers':
      return update(state, {customers: {$set: action.payload}});
    case 'filter':
      return state;
    default:
      return state;
  }
}
export function serviceitems(state = ['a service item'], action) {
  switch (action.type) {
    case 'add':
    	return ['new service item', ...state];
    case 'filter':
     	console.log('dispathing filter serviceitems');
    	return [];
    default:
    	return state;
  }
}

export function navigation(state = [], action) {
  switch(action.type) {
    case 'push_location':
      // console.log(locationsAreEqual);
      for (var i = 0; i < state.length; i++) {
        if (locationsAreEqual(state[i].location, action.location)) {
          console.log('nav back');
          return update(state, {$splice:[[i+1, state.length]]});
        }
      }
      return update(state, {$push: [{location: action.location, title: action.title}]});
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  customers,
  serviceitems,
  navigation
});

export default rootReducer;