import React from 'react';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userDetailsReducer, userLoginReducer} from "./Reducers/userReducers";
import {productsListReducer} from "./Reducers/productReducers";
import {projectsListReducer} from "./Reducers/projectReducers";
import {stocksListReducer} from "./Reducers/stockReducers";
import {suppliersListReducer} from "./Reducers/supplierReducers";
import {transactionReducer} from "./Reducers/transactionReducers";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    productsList: productsListReducer,
    projectsList: projectsListReducer,
    stocksList: stocksListReducer,
    suppliersList: suppliersListReducer,
    transaction: transactionReducer

});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);




