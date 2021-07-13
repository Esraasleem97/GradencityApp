import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";

const TrimMove = ({navigation , route}) => {

    const { params: { data: { products } } } = route

    return (
        <Layout>
            <Header title='تقليم ونقل' navigation={navigation} />
            <SharedScreens onTop={true}>
                <SelectDropDown items={products}/>
            </SharedScreens>
        </Layout>

    )
}

export default TrimMove;