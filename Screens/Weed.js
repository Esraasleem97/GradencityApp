import React from "react";
import {Layout } from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {items} from "../DummyData";

const Weed = ({navigation}) => {

    return (
        <Layout>
            <Header title='التعشيب' navigation={navigation} />
            <SharedScreens onTop={true}>
                <SelectDropDown items={items}/>
            </SharedScreens>
        </Layout>

    )
}

export default Weed;