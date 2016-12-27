export function filter_customers(q) {
  return {
    type: 'filter_customers',
    q: q
  }
}

export function set_customers(payload) {
  return {
    type: 'set_customers',
    payload: payload
  }
}

export function add_customer(payload) {
	return {
		type: 'add_customer',
		payload: payload
	}
}

export function filter_serviceitems(q) {
  return {
    type: 'filter_serviceitems',
    q: q
  }
}

export function push_location(location, title) {
	return {
		type: 'push_location',
		location: location,
		title: title
	}
}
//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export