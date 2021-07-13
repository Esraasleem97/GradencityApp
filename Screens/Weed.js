import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";

const Weed = ({navigation , route}) => {

    const { params: { data: { products } } } = route
    return (
        <Layout>
            <Header title='التعشيب' navigation={navigation} />
            <SharedScreens onTop={true}>
                <SelectDropDown items={products}/>
            </SharedScreens>
        </Layout>
    )
}

export default Weed;