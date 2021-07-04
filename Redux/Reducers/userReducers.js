import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,

    USER_REGISTER_REQUESTS,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,

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

            return {}

        default:
            return state
    }
}


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {

        case USER_REGISTER_REQUESTS:

            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS:

            return {
                loading: false,
                user: action.payload
            }

        case USER_REGISTER_FAILED:

            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

