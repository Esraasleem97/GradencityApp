import React from 'react';
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";
import {items} from "../DummyData";


const TransferBetweenPlants = ({navigation}) => {

    return (
        <Layout>
            <Header title='النقل بين المشاتل' navigation={navigation}/>
            <SharedScreens onTop={true}>
                <SelectDropDown items={items} title='من المشتل'/>
                <SelectDropDown items={items} title='الى المشتل'/>
                <SelectDropDown items={items}/>
            </SharedScreens>
        </Layout>
    );
}

export default TransferBetweenPlants;