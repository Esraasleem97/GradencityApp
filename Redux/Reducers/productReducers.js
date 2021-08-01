import {
    PRODUCT_CREATE_FAILED,
    PRODUCT_CREATE_REFRESH,
    PRODUCT_CREATE_REQUESTS,
    PRODUCT_CREATE_SUCCESS,
    PRODUCTS_LIST_FAILED,
    PRODUCTS_LIST_REQUESTS,
    PRODUCTS_LIST_SUCCESS
} from "../Constants/productConstants";


export const productsListReducer = (state = {}, action) => {
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


export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {

        case PRODUCT_CREATE_REQUESTS:

            return {
                productLoading: true
            }

        case PRODUCT_CREATE_SUCCESS:

            return {
                productLoading: false,
                product: action.payload
            }

        case PRODUCT_CREATE_FAILED:

            return {
                productLoading: false,
                error: action.payload
            }

        case PRODUCT_CREATE_REFRESH:
            return {
                product: undefined,
                error: undefined
            }
        default:
            return state
    }
}