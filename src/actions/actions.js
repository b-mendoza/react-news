import { types } from '../types/types';

export const addCategory = category => ({
    type: types.ADD_CATEGORY,
    payload: category,
});
