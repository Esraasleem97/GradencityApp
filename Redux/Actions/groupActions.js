import {userLogoutHandler} from "./userActions";
import axios from "axios";
import {API_PROTECTION, GROUPS} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {GROUPS_LIST_FAILED, GROUPS_LIST_REQUESTS, GROUPS_LIST_SUCCESS} from "../Constants/groupConstants";

export const groupsListHandler = () => async (dispatch) => {


    try {

        dispatch({type: GROUPS_LIST_REQUESTS})

        let User = await AsyncStorage.getItem('user')

        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.get(`${GROUPS}`, config)

        dispatch({
            type: GROUPS_LIST_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: GROUPS_LIST_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}

