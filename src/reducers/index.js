import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import articleReducer from './ArticleReducer';  

const rootReducer = combineReducers ({
    userState: userReducer,
    articleStore: articleReducer,
});

export default rootReducer;

