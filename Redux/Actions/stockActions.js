import {userLogoutHandler} from "./userActions";
import {STOCKS_LIST_REQUESTS, STOCKS_LIST_SUCCESS, STOCKS_LIST_FAILED} from "../Constants/stockConstants";
import axios from "axios";
import {API_PROTECTION, STOCKS} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const stocksListHandler = () => async (dispatch) => {


    try {

        dispatch({type: STOCKS_LIST_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data: stocksData} = await axios.get(`${STOCKS}`, config)

        dispatch({
            type: STOCKS_LIST_SUCCESS,
            payload: stocksData
        })


    } catch (e) {

        dispatch({
            type: STOCKS_LIST_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}

