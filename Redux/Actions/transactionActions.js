import {userLogoutHandler} from "./userActions";
import {
    TRANSACTIONS_REQUESTS,
    TRANSACTIONS_SUCCESS,
    TRANSACTIONS_FAILED,
    TRANSACTIONS_REFRESH,
    MY_TRANSACTIONS_REQUESTS,
    MY_TRANSACTIONS_SUCCESS,
    MY_TRANSACTIONS_FAILED
} from "../Constants/transactionConstants";
import axios from "axios";
import {API_PROTECTION, MY_TRANSACTIONS, TRANSACTION} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const CHECKIN = 1
export const CHECKOUT = 2
export const ACHIEVEMENT = 3
export const SEEDING = 4
export const IMPACT = 5
export const WEEDING = 6
export const TRIM = 7
export const TRANSFER_PLANTS = 8
export const ROTATE_TYPE = 9
export const OTHERS = 10
export const TransactionsHandler = (
    Data = {},
    Url = TRANSACTION,
    isJsonContent = false
) => async (dispatch) => {


    let contentType = 'application/json'

    if (!isJsonContent) {
        contentType = 'multipart/form-data'
        // contentType = 'application/x-www-form-urlencoded'
    }

    try {

        dispatch({type: TRANSACTIONS_REQUESTS})

        let User = await AsyncStorage.getItem('user')

        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': API_PROTECTION,
                'Content-Type': contentType.toString(),
                Authorization: token.toString()
            }
        }

        const {data} = await axios.post(`${Url}`, Data, config)

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
            type: TRANSACTIONS_REFRESH
        })
    }, 5000)
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
