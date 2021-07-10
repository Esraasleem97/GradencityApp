import React from 'react';
import {useSelector} from "react-redux";
import AuthorizedScreens from "./AuthorizedScreens";
import UnAuthorizedScreens from "./UnAuthorizedScreens";

const NavigationHandler = () => {

    const {userLogin} = useSelector(state => state);

    const {user} = userLogin

    return (user && user.username === 1 ? <AuthorizedScreens/> : <UnAuthorizedScreens/>);
}


export default NavigationHandler;