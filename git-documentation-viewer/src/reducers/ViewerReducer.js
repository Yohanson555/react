import * as Types from 'actions/types';

const INITIAL_STATE = {
    content: '',
    search: [],
    tree: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_STATE:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
}
