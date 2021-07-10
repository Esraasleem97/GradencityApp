import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,



    USER_REFRESH // for logout users used
} from "../Constants/userConstants";


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {

        case USER_LOGIN_REQUESTS:

            return {
                loading: true
            }

        case USER_LOGIN_SUCCESS:

            return {
                loading: false,
                user: action.payload
            }

        case USER_LOGIN_FAILED:

            return {
                loading: false,
                error: action.payload
            }

        case  USER_REFRESH:

            return {user: undefined}

        default:
            return state
    }
}

