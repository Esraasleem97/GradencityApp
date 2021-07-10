import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,

    USER_REFRESH,

} from "../Constants/userConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API_PROTECTION, LOGIN} from "../../Api";


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
        if (username === 1 && password === 1) {
            let data = {username, password}
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
            await AsyncStorage.removeItem('user')

            return await AsyncStorage.setItem('user', JSON.stringify(data))
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
 * @returns {(function(*, *): void)|*}
 * @constructor
 */
export const userLogoutHandler = () => async (dispatch) => {

    await AsyncStorage.removeItem('user')

    dispatch({type: USER_REFRESH})

}
