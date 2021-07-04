import React from 'react';


import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Colors} from "./Styles";

//Item array for the dropdown
const items = [
    //name key is must.It is to show the text in front
    {id: 1, name: 'بند 1'},
    {id: 2, name: 'بند 1'},
    {id: 3, name: 'بند 1'},
    {id: 4, name: 'بند 1'},
    {id: 5, name: 'بند 1'},
    {id: 6, name: 'بند 1'},
    {id: 7, name: 'بند 1'},
    {id: 8, name: 'بند 1'},
    {id: 9, name: 'بند 1'},
    {id: 10, name: 'بند 1'},
    {id: 9, name: 'بند 1'},
    {id: 10, name: 'بند 1'},
    {id: 11, name: 'بند 11'},
    {id: 12, name: 'بند 112'},
];

const SelectDropDown = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <SearchableDropdown
                    Icon='email'
                    onTextChange={(text) => console.log(text)}
                    //On text change listener on the searchable input
                    onItemSelect={(item) => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{padding: 5}}
                    //suggestion container style
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
                    defaultIndex={2}
                    //default selected item index
                    placeholder="البند"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                />

            </View>
        </SafeAreaView>
    );
};

export default SelectDropDown;

const styles = StyleSheet.create({

    styledInputSearch : {
        backgroundColor: Colors.secondary,
        paddingVertical: 15 ,
        paddingHorizontal:20,
        height: 50,
        borderRadius:5,
        fontSize: 16,
        marginTop:3,
        marginBottom: 5,
        color: Colors.darkgray,
        textAlign: 'right',
    },
    itemsContainerStyle:{
        borderWidth: 1,
        borderColor:Colors.secondary,
        borderRadius:5,
        maxHeight:150,

    },
    styledItemSearch : {
        backgroundColor: Colors.white,
        paddingVertical: 15 ,
        paddingHorizontal:20,
        height: 50,
        borderRadius:5,
        fontSize: 16,
        color: Colors.darkgray,
        textAlign: 'right',
        borderBottomWidth:1,
        borderBottomColor:Colors.secondary
    },
});
