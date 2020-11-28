import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const handleItemClick = (name) => ({ type: type.TOP_MENU, name });
const handleItemSideBarClick = (name) => ({ type: type.ACTIVE_ITEM_SIDEBAR, name });

const toggleSideBar = (show) => ({ type: type.SIDEBAR, sidebar_visible: show });

const handleCardClick = (params) => ({ type: type.TOP_SIDEBAR_MENU, params });

const logout = (params) => {
    return api.logout(params)
        .then(result => toastr.success(result.message))
        .catch(error => toastr.error(error.message));
};


export default {
    handleItemClick,
    toggleSideBar,
    handleItemSideBarClick,
    handleCardClick,
    logout
}