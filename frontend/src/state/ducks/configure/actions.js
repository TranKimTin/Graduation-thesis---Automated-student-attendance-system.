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

////////////////////SECTION_CLASS/////////////////////////////////
const getSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getSectionClass(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertSectionClass(params)
            .then(result => {
                toastr.success("Thêm lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const importSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.importSectionClass(params)
            .then(result => {
                toastr.success("Import lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};
const updateSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateSectionClass(params)
            .then(result => {
                toastr.success("Sửa lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteSectionClass(params)
            .then(result => {
                toastr.success("Xóa lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

////////////////////STUDY//////////////////////
const getStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getStudy(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertStudy(params)
            .then(result => {
                toastr.success("Đăng ký học thành công");
                dispatch(getStudy());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const updateStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateStudy(params)
            .then(result => {
                toastr.success("Sửa thông tin đăng ký học thành công");
                dispatch(getStudy());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteStudy(params)
            .then(result => {
                toastr.success("Xóa thông tin đăng ký học thành công");
                dispatch(getStudy());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

///////////////////////TEACH///////////////////////////////////////
const getTeach = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getTeach(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertTeach = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertTeach(params)
            .then(result => {
                toastr.success("Thêm lịch dạy thành công");
                dispatch(getTeach());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const updateTeach = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateTeach(params)
            .then(result => {
                toastr.success("Sửa lịch giảng dạy thành công");
                dispatch(getTeach());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteTeach = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteTeach(params)
            .then(result => {
                toastr.success("Xóa lịch giảng dạy thành công");
                dispatch(getTeach());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};
export default {
    openModal,
    closeModal,
    changeValue,
    openModalDelete,
    closeModalDelete,
    getSectionClass,
    insertSectionClass,
    importSectionClass,
    updateSectionClass,
    deleteSectionClass,
    getStudy,
    insertStudy,
    updateStudy,
    deleteStudy,
    getTeach,
    insertTeach,
    updateTeach,
    deleteTeach
};