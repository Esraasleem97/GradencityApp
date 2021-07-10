import React from 'react';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userLoginReducer} from "./Reducers/userReducers";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);




