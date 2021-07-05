import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";

const Taeqil = ({navigation}) => {

    return (
        <Layout>
            <Header title='التعقيل' navigation={navigation} />
            <SharedScreens />
        </Layout>

    )
}

export default Taeqil;