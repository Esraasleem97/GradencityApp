import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,

    USER_REFRESH,

    USER_REGISTER_REQUESTS,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
} from "../Constants/userConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API_PROTECTION, LOGIN, REGISTER} from "../../Api";


/**
 *
 * @param username
 * @param password
 * @returns {(function(*): Promise<void>)|*}
 * @constructor
 */
export const userLoginHandler = (username, password) => async (dispatch) => {

    try {
        dispatch({type: USER_LOGIN_REQUESTS})

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION
            }
        }

        const {data} = await axios.post(`${LOGIN}`, {username, password}, config);


        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        await AsyncStorage.removeItem('user')

        await AsyncStorage.setItem('user', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

    }
}

/**
 *
 * @param userData
 * @returns {(function(*): Promise<void>)|*}
 */

export const userRegisterHandler = (userData = {}) => async (dispatch) => {

    try {
        dispatch({type: USER_REGISTER_REQUESTS})

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION

            }
        }

        const {data} = await axios.post(`${REGISTER}`, userData, config);


        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        await AsyncStorage.removeItem('user')

        await AsyncStorage.setItem('user', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

    }
}


/**
 *
 * @returns {(function(*, *): void)|*}
 * @constructor
 */
export const Logout = () => async (dispatch) => {

    await AsyncStorage.removeItem('user')

    dispatch({type: USER_REFRESH})

}
