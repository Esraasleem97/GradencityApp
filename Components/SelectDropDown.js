import React from 'react';


import {StyleSheet, View} from 'react-native';
import {Colors, Label} from "./Styles";
import SearchableDropDownScroll from "../Support/SearchableDropDown";



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


const SelectDropDown = ({items}) => {

    return (
        <View style={{marginTop: 20}}>
            <Label>البند</Label>
            <SearchableDropDownScroll
                Icon='email'
                onTextChange={(text) => console.log(text)}
                //On text change listener on the searchable input
                onItemSelect={(item) => alert(JSON.stringify(item))}
                //onItemSelect called after the selection from the dropdown
                textInputStyle={styles.styledInputSearch}
                chip={true}
                itemStyle={
                    //single dropdown item style
                    styles.styledItemSearch
                }
                itemTextStyle={{
                    //text style of a single dropdown item
                    color: '#222',
                }}
                itemsContainerStyle={
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown height
                    styles.itemsContainerStyle
                }
                items={items}
                //mapping of item array
                defaultIndex={0}
                //default selected item index
                placeholder="البند"
                //place holder for the search input
                resetValue={false}
                //reset textInput Value with true and false state
                underlineColorAndroid="transparent"
            />
        </View>

    );
};

export default SelectDropDown;

const styles = StyleSheet.create({

    styledInputSearch: {
        backgroundColor: Colors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 50,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 3,
        marginBottom: 5,
        color: Colors.darkgray,
        textAlign: 'right',
    },
    itemsContainerStyle: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 5,
        maxHeight: 150,

    },
    styledItemSearch: {
        backgroundColor: Colors.white,
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 50,
        borderRadius: 5,
        fontSize: 16,
        color: Colors.darkgray,
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary
    },
});
