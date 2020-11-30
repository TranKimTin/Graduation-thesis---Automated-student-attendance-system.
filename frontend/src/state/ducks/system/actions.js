import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const openModal = (params) => {
    return function (dispatch) {
        return dispatch({ type: type.OPEN_MODAL, data: params });
    };
};

const closeModal = () => {
    return function (dispatch) {
        return dispatch({ type: type.CLOSE_MODAL });
    };
};

const openModalDelete = () => {
    return function (dispatch) {
        return dispatch({ type: type.OPEN_MODAL_DELETE });
    };
};

const closeModalDelete = () => {
    return function (dispatch) {
        return dispatch({ type: type.CLOSE_MODAL_DELETE });
    };
};

const changeValue = (params) => {
    return function (dispatch) {
        return dispatch({ type: type.CHANGE_VALUE, data: params });
    };
};

const getUser = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getUser(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertUser = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertUser(params)
            .then(result => {
                toastr.success("Thêm tài khoản thành công");
                dispatch(getUser());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const updateUser = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateUser(params)
            .then(result => {
                toastr.success("Sửa khoản thành công");
                dispatch(getUser());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteUser = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteUser(params)
            .then(result => {
                toastr.success("Xóa khoản thành công");
                dispatch(getUser());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

export default {
    openModal,
    closeModal,
    openModalDelete,
    closeModalDelete,
    changeValue,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};