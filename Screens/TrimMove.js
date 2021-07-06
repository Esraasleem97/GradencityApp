import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {items} from "../DummyData";

const TrimMove = ({navigation}) => {

    return (
        <Layout>
            <Header title='تقليم ونقل' navigation={navigation} />
            <SharedScreens onTop={true}>
                <SelectDropDown items={items}/>
            </SharedScreens>
        </Layout>

    )
}

export default TrimMove;