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

const insertClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.insertClass(params)
            .then(result => {
                toastr.success("Thêm lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.deleteClass(params)
            .then(result => {
                toastr.success("Xóa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.updateClass(params)
            .then(result => {
                toastr.success("Sửa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const openModal = (params) => {
    return function (dispatch) {
        return dispatch({type:type.OPEN_MODAL});
    };
};

const closeModal = (params) => {
    return function (dispatch) {
        return dispatch({type:type.CLOSE_MODAL});
    };
};

const changeValue = (params) => {
    return function (dispatch) {
        return dispatch({type:type.CHANGE_VALUE, data: params});
    };
};
export default {
    getClass,
    insertClass,
    deleteClass,
    updateClass,
    openModal,
    closeModal,
    changeValue
};