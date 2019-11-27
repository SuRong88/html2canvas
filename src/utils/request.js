import axios from 'axios';
import Vue from 'vue'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/';

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$del = del;
Vue.prototype.$put = put;

Vue.prototype.axiosAll = function(option) {
		return axios.all(option)
	},
	//http request 拦截器
	axios.interceptors.request.use(
		config => {
			config.headers = {
				'Content-Type': 'application/json;charset=UTF-8'
			}
			return config;
		},
		error => {
			return Promise.reject(err);
		}
	);

axios.interceptors.response.use(
	res => {
		if (res.data.code != 0) {
			return Promise.reject(res)
		}
		return res;
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err)
			})
	})
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.post(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function del(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.delete(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.put(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}
