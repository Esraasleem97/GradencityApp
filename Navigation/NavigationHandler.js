import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AuthorizedScreens from "./AuthorizedScreens";
import UnAuthorizedScreens from "./UnAuthorizedScreens";
import {userDetailsHandler} from "../Redux/Actions/userActions";

const NavigationHandler = () => {

    const {userDetails} = useSelector(state => state);

    const {userInfo} = userDetails

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userDetailsHandler())
    }, [dispatch])


    return (userInfo && userInfo.token ? <AuthorizedScreens/> : <UnAuthorizedScreens/>);
}


export default NavigationHandler;