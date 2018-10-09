import * as Types from 'actions/types';

export const setState = (obj) => {
    return {
        type: Types.SET_STATE,
        payload: obj
    };
} 