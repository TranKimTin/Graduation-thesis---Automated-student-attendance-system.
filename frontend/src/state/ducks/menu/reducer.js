import type from './types';

const initialState = {
    sidebar_visible: true,
    open: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.TOP_MENU:
            return {
                ...state,
                top_menu_active: action.name,
                active_item: action.name
            };
        case type.ACTIVE_ITEM_SIDEBAR:
            return {
                ...state,
                active_item: action.name
            };
        case type.SIDEBAR:
            return {
                ...state,
                sidebar_visible: !state.sidebar_visible
            };
        case type.TOP_SIDEBAR_MENU:
            return {
                ...state,
                top_menu_active: action.params.top_menu_active,
                active_item: action.params.active_item
            };
        default:
            return state;
    }
};

export default reducer;