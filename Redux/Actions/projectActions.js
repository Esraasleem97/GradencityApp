import {userLogoutHandler} from "./userActions";
import {
    PROJECTS_LIST_REQUESTS,
    PROJECTS_LIST_SUCCESS,
    PROJECTS_LIST_FAILED,
    PROJECT_CREATE_REQUESTS,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAILED ,
    PROJECT_CREATE_REFRESH
} from "../Constants/projectConstants";
import axios from "axios";
import {API_PROTECTION, PROJECTS} from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const projectsListHandler = () => async (dispatch) => {


    try {

        dispatch({type: PROJECTS_LIST_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.get(`${PROJECTS}`, config)

        dispatch({
            type: PROJECTS_LIST_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: PROJECTS_LIST_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

        if (e.response && e.response.status === 401) {
            return dispatch(userLogoutHandler())
        }

    }
}


export const projectsCreateHandler = (projectData) => async (dispatch) => {


    try {

        dispatch({type: PROJECT_CREATE_REQUESTS})

        let User = await AsyncStorage.getItem('user')


        const {token} = JSON.parse(User)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: token.toString()
            }
        }

        const {data} = await axios.post(`${PROJECTS}`, projectData, config)

        dispatch({
            type: PROJECT_CREATE_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: PROJECT_CREATE_FAILED,
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
            type: PROJECT_CREATE_REFRESH,
        })
    }, 3000)
}