import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_DETAILS_REQUESTS ,
    USER_DETAILS_SUCCESS ,
    USER_DETAILS_FAILED ,


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



export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {

        case USER_DETAILS_REQUESTS:

            return {
                loading: true
            }

        case USER_DETAILS_SUCCESS:

            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_DETAILS_FAILED:

            return {
                loading: false,
                error: action.payload
            }

        case  USER_REFRESH:

            return {userInfo: undefined}
        default:
            return state
    }
}

