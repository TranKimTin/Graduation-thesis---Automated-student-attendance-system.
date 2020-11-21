import type from './types';

const handleItemClick = (name) => ({type: type.TOP_MENU, name});
const handleItemSideBarClick = (name) => ({type: type.ACTIVE_ITEM_SIDEBAR, name});

const toggleSideBar = (show) => ({type: type.SIDEBAR, sidebar_visible: show});

const handleCardClick = (params) => ({type: type.TOP_SIDEBAR_MENU, params});



export default {
    handleItemClick,
    toggleSideBar,
    handleItemSideBarClick,
    handleCardClick
}