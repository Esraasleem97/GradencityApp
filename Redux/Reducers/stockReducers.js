import {STOCKS_LIST_REQUESTS, STOCKS_LIST_SUCCESS , STOCKS_LIST_FAILED} from "../Constants/stockConstants";


export const stocksListReducer = (state = {}, action) => {
    switch (action.type) {

        case STOCKS_LIST_REQUESTS:


            return {
                stockLoading: true
            };

        case STOCKS_LIST_SUCCESS:

            return {
                stockLoading: false,
                stocks: action.payload
            }

        case STOCKS_LIST_FAILED:

            return {
                stockLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
