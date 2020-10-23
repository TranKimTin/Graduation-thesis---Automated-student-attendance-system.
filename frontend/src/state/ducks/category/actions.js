import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const getClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.getClass(params)
            .then(result => dispatch({type: type.GET_CLASS_SUCCESS, data: result.data}))
            .catch(error => toastr.error(error.message));
    };
};

export default {
    getClass
};