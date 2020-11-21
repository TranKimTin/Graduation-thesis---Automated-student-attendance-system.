import axios from 'axios';
import Cookies from 'js-cookie';

const headers = {
    'content-type': 'application/json'
};
const instance = axios.create({});

instance.interceptors.request.use(
    async config => {
        return config;
    },
    error => Promise.reject(error),
);


instance.interceptors.response.use(
    response => {
        if (response.data.error_code === 403) {
            return response;
        } else
            return response;
    },
    async error => {
        return Promise.reject(error);
    }
);

export default {
    get: function (url, params = {}) {
        headers['x-access-token'] = Cookies.get('user') ? JSON.parse(Cookies.get('user')).token : '';
        return instance.get(url, {headers, params})
            .then(result => result.data)
    },
    post: function (url, body = {}) {
        headers['x-access-token'] = Cookies.get('user') ? JSON.parse(Cookies.get('user')).token : '';
        return instance.post(url, body, {headers})
            .then(result => result.data);
    },
    put: function (url, body = {}) {
        headers['x-access-token'] = Cookies.get('user') ? JSON.parse(Cookies.get('user')).token : '';
        return instance.put(url, body, {headers})
            .then(result => result.data);
    },
    delete: function (url, params = {}) {
        headers['x-access-token'] = Cookies.get('user') ? JSON.parse(Cookies.get('user')).token : '';
        return instance.delete(url, {params, headers})
            .then(result => result.data);
    }
};