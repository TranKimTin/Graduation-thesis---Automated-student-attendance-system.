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
            .catch(error => toastr.error(error.message));
    };
};

export default {
    openModal,
    closeModal,
    openModalDelete,
    closeModalDelete,
    changeValue,
    getUser,
};