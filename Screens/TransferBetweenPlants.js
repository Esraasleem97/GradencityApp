import React from 'react';
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";


const TransferBetweenPlants = ({navigation, route}) => {


    const {params: {data: {products, stocks}}} = route
    return (
        <Layout>
            <Header title='النقل بين المشاتل' navigation={navigation}/>
            <SharedScreens onTop={true}>
                <SelectDropDown items={stocks} title='من المشتل'/>
                <SelectDropDown items={stocks} title='الى المشتل'/>
                <SelectDropDown items={products}/>
            </SharedScreens>
        </Layout>
    );
}

export default TransferBetweenPlants;