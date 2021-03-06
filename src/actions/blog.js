import axios from 'axios';
import * as types from '../consts';

const base = 'http://35.237.145.76:8080/api/v1/blog';

export const add = blog => dispatch => axios.post(`${base}/add`, {blog}).then( response =>{
	dispatch({
		type: types.BLOG_ADDED,
		payload: response.data.blog
	});
	dispatch({
		type: types.CATEGORY_EDITED,
		payload: response.data.category
	});
});

export const fetch = () => dispatch => axios.get(`${base}/list`).then( response => {
	dispatch({
		type: types.BLOG_FETCHED,
		payload: response.data.blogs
	});
});

export const edit = blog => dispatch => axios.put(`${base}/edit`, {blog}).then( response => {
	dispatch({
		type: types.BLOG_EDITED,
		payload: response.data.blog
	});
});

export const remove = id => dispatch => axios.delete(`${base}/delete/${id}`).then( response => {
	dispatch({
		type: types.BLOG_DELETED,
		payload: response.data.id
	});
});

export const archive = id => dispatch => axios.put(`${base}/archive/${id}`).then( response => {
	dispatch({
		type: types.BLOG_EDITED,
		payload: response.data.blog
	});
});

export const fetchCategory = category => dispatch => axios.get(`${base}/categories/${category}`).then( response => {
	dispatch({
		type: types.CATEGORY_FETCH,
		payload: response.data.blogs
	})
});

export const send = message => dispatch => axios.post(`${base}/send`, { message }).then( response =>{
	dispatch({
		type: types.MESSAGE_SENT,
		payload: response.data.message
	});
});