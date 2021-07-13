import {userLogoutHandler} from "./userActions";
import {SUPPLIERS_LIST_REQUESTS, SUPPLIERS_LIST_SUCCESS, SUPPLIERS_LIST_FAILED} from "../Constants/supplierConstants";
import axios from "axios";
import {API_PROTECTION, SUPPLIERS} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const suppliersListHandler = () => async (dispatch) => {


    try {

        dispatch({type: SUPPLIERS_LIST_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.get(`${SUPPLIERS}`, config)

        dispatch({
            type: SUPPLIERS_LIST_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: SUPPLIERS_LIST_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}

