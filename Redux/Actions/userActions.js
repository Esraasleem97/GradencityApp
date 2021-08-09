import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_REFRESH,
    USER_DETAILS_REQUESTS,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILED
} from "../Constants/userConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API_PROTECTION, LOGIN} from "../../Api";


/**
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

        dispatch(userDetailsHandler())

    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })
    }
}

export const userDetailsHandler = () => async (dispatch) => {


    try {

        dispatch({type: USER_DETAILS_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        if (!User) {
            new Error('please login Again');
        }


        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: JSON.parse(User)
        })

    } catch (e) {

        dispatch(userLogoutHandler())

        dispatch({
            type: USER_DETAILS_FAILED,
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

    await AsyncStorage.removeItem('user' , (error) => console.log(error));

    dispatch({type: USER_REFRESH})

}
