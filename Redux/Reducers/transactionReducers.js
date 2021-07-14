import {
    TRANSACTIONS_REQUESTS,
    TRANSACTIONS_SUCCESS,
    TRANSACTIONS_FAILED,
    TRANSACTIONS_REFRESH, MY_TRANSACTIONS_FAILED, MY_TRANSACTIONS_SUCCESS, MY_TRANSACTIONS_REQUESTS
} from "../Constants/transactionConstants";


export const transactionReducer = (state = {}, action) => {
    switch (action.type) {

        case TRANSACTIONS_REQUESTS:


            return {
                loading: true
            };

        case TRANSACTIONS_SUCCESS:

            return {
                loading: false,
                data: action.payload
            }

        case TRANSACTIONS_FAILED:

            return {
                loading: false,
                error: action.payload
            }
        case TRANSACTIONS_REFRESH :
            return {
                data: undefined,
                error: undefined
            }
        default:
            return state
    }
}


export const myTransactionReducer = (state = {}, action) => {
    switch (action.type) {

        case MY_TRANSACTIONS_REQUESTS:

            return {
                loading: true
            };

        case MY_TRANSACTIONS_SUCCESS:

            return {
                loading: false,
                myTransactionsList: action.payload
            }

        case MY_TRANSACTIONS_FAILED:

            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}
