import {SUPPLIERS_LIST_REQUESTS, SUPPLIERS_LIST_SUCCESS, SUPPLIERS_LIST_FAILED} from "../Constants/supplierConstants";


export const suppliersListReducer = (state = {}, action) => {
    switch (action.type) {

        case SUPPLIERS_LIST_REQUESTS:

            return {
                supplierLoading: true
            };

        case SUPPLIERS_LIST_SUCCESS:

            return {
                supplierLoading: false,
                suppliers: action.payload
            }

        case SUPPLIERS_LIST_FAILED:

            return {
                supplierLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
