import {PRODUCTS_LIST_FAILED, PRODUCTS_LIST_REQUESTS, PRODUCTS_LIST_SUCCESS} from "../Constants/productConstants";


export const productsListReducer = (state = {productLoading: true}, action) => {
    switch (action.type) {

        case PRODUCTS_LIST_REQUESTS:

            return {
                productLoading: true
            }

        case PRODUCTS_LIST_SUCCESS:

            return {
                productLoading: false,
                products: action.payload
            }

        case PRODUCTS_LIST_FAILED:

            return {
                productLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
