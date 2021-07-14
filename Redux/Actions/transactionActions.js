import {userLogoutHandler} from "./userActions";
import {
    TRANSACTIONS_REQUESTS,
    TRANSACTIONS_SUCCESS,
    TRANSACTIONS_FAILED,
    TRANSACTIONS_REFRESH, MY_TRANSACTIONS_REQUESTS, MY_TRANSACTIONS_SUCCESS, MY_TRANSACTIONS_FAILED
} from "../Constants/transactionConstants";
import axios from "axios";
import {API_PROTECTION, MY_TRANSACTIONS, TRANSACTION} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const SEEDING = 4
export const IMPACT = 5
export const WEEDING = 6
export const TRIM = 7

export const TransactionsHandler = (Data = {}) => async (dispatch) => {


    try {

        dispatch({type: TRANSACTIONS_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.post(`${TRANSACTION}`, Data, config)

        dispatch({
            type: TRANSACTIONS_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: TRANSACTIONS_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }


    setTimeout(() => {
        dispatch({
            type: TRANSACTIONS_REFRESH,
        })
    }, 3000)
}


export const MyTransactionsHandler = () => async (dispatch) => {


    try {

        dispatch({type: MY_TRANSACTIONS_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.get(`${MY_TRANSACTIONS}`, config)

        dispatch({
            type: MY_TRANSACTIONS_SUCCESS,
            payload: data
        })


    } catch (e) {
console.log(e)
        dispatch({
            type: MY_TRANSACTIONS_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}
