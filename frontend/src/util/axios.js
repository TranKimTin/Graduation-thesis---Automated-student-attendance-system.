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
        if (response.data.error_code === 401) { //access_token sai, hết hạn => về tramg login
            setTimeout(() => {
                Cookies.remove("access_token");
                Cookies.remove("user");
                window.location.href = '/login';
            }, 1000);
            return Promise.reject(response.data);
        }
        else if (response.data.error_code === 402 || response.data.error_code === 403) { //đăng nhập sai || không có quyền
            return Promise.reject(response.data);
        } else {
            return response;
        }
    },
    async error => {
        return Promise.reject(error);
    }
);

export default {
    get: function (url, params = {}) {
        headers['x-access-token'] = Cookies.get('access_token') || '';
        return instance.get(url, { headers, params })
            .then(result => result.data)
    },
    post: function (url, body = {}) {
        headers['x-access-token'] = Cookies.get('access_token') || '';
        return instance.post(url, body, { headers })
            .then(result => result.data);
    },
    put: function (url, body = {}) {
        headers['x-access-token'] = Cookies.get('access_token') || '';
        return instance.put(url, body, { headers })
            .then(result => result.data);
    },
    delete: function (url, params = {}) {
        headers['x-access-token'] = Cookies.get('access_token') || '';
        return instance.delete(url, { params, headers })
            .then(result => result.data);
    }
};