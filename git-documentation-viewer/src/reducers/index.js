import { combineReducers } from 'redux';
import ViewerReducer from './ViewerReducer';


const reducers = combineReducers({
    view: ViewerReducer
});

export default reducers;
