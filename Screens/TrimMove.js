import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";

const TrimMove = ({navigation}) => {

    return (
        <Layout>
            <Header title='تقليم ونقل' navigation={navigation} />
            <SharedScreens />
        </Layout>

    )
}

export default TrimMove;