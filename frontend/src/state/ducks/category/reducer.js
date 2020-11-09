import type from "./types";

const initialState = {
    loading: true,
    listClass: [],
    paging: {
        pageSize: 25,
        pageIndex: 1,
        totalPage: 1,
    },
    open: false,
    dataInsert: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.WAITTING_LOAD_DATA:
            return {
                ...state,
                loading: true,
            };
        case type.GET_CLASS_SUCCESS:
            return {
                ...state,
                loading: false,
                listClass: action.data,
                paging: action.paging,
            };
        case type.OPEN_MODAL:
            return {
                ...state,
                open: true,
                dataInsert: [],
            };
        case type.CLOSE_MODAL:
            return {
                ...state,
                open: false,
            };
        case type.CHANGE_VALUE:
            console.log(state.dataInsert);
            return {
                ...state,
                dataInsert: {
                    ...state.dataInsert,
                    [action.data.name]: action.data.value,
                },
            };
        default:
            return state;
    }
};

export default reducer;
