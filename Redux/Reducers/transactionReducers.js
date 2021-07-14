import {
    TRANSACTIONS_REQUESTS,
    TRANSACTIONS_SUCCESS,
    TRANSACTIONS_FAILED,
    TRANSACTIONS_REFRESH
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
