import { types } from '../types/types';

export const newsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_CATEGORY:
            return { ...state, category: action.payload };
        case types.FINISH_LOADING:
            return { ...state, loading: false };

        default:
            return state;
    }
};
