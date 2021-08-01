import {userLogoutHandler} from "./userActions";
import {
    PRODUCTS_LIST_FAILED,
    PRODUCTS_LIST_REQUESTS,
    PRODUCTS_LIST_SUCCESS,
    PRODUCT_CREATE_REQUESTS,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAILED,
    PRODUCT_CREATE_REFRESH
} from "../Constants/productConstants";
import axios from "axios";
import {API_PROTECTION, PRODUCTS} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const productsListHandler = () => async (dispatch) => {


    try {

        dispatch({type: PRODUCTS_LIST_REQUESTS})

        let User = await AsyncStorage.getItem('user')

        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.get(`${PRODUCTS}`, config)

        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: PRODUCTS_LIST_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}


export const productCreateHandler = (productData) => async (dispatch) => {


    try {

        dispatch({type: PRODUCT_CREATE_REQUESTS})

        let User = await AsyncStorage.getItem('user')

        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.post(`${PRODUCTS}`, productData , config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: PRODUCT_CREATE_FAILED,
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
            type: PRODUCT_CREATE_REFRESH,
        })
    }, 3000)
}

