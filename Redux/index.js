import React from 'react';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userDetailsReducer, userLoginReducer} from "./Reducers/userReducers";
import {productsListReducer} from "./Reducers/productReducers";
import {projectCreateReducer, projectsListReducer} from "./Reducers/projectReducers";
import {stocksListReducer} from "./Reducers/stockReducers";
import {suppliersListReducer} from "./Reducers/supplierReducers";
import {myTransactionReducer, transactionReducer} from "./Reducers/transactionReducers";
import {groupsListReducer} from "./Reducers/groupReducers";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    productsList: productsListReducer,
    projectsList: projectsListReducer,
    stocksList: stocksListReducer,
    suppliersList: suppliersListReducer,
    transaction: transactionReducer,
    myTransactions: myTransactionReducer,
    groupsList: groupsListReducer,
    createProject: projectCreateReducer

});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);




