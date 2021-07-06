import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";
const items = [
    {id: 1, name: 'بند 1'},
    {id: 2, name: 'بند 2'},
    {id: 3, name: 'بند 3'},
    {id: 4, name: 'بند 4'},
    {id: 5, name: 'بند 5'},
    {id: 6, name: 'بند 6'},
    {id: 7, name: 'بند 7'},
    {id: 8, name: 'بند 8'},
    {id: 9, name: 'بند 9'},
    {id: 10, name: 'بند 10'},
    {id: 11, name: 'بند 11'},
    {id: 12, name: 'بند 12'},
    {id: 13, name: 'بند 13'},
    {id: 14, name: 'بند 14'},
];
const Achievement = ({navigation}) => {
    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>
            <SharedScreens onTop={true}>
                <SelectDropDown items={items} title='مشاريع'/>
            </SharedScreens>
        </Layout>
    )
}
export default Achievement;