import React from 'react';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userDetailsReducer, userLoginReducer} from "./Reducers/userReducers";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);




