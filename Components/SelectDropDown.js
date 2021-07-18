import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Label} from "./Styles";
import SearchableDropDownScroll from "../Support/SearchableDropDown";


const SelectDropDown = ({items, title = 'البند', style, onSelectItem , selectedItem}) => {



    return (
        <View style={{marginTop: 5}}>
            <Label style={style}>{title}</Label>
            <SearchableDropDownScroll
                onTextChange={(text) => console.log(text)}

                Icon='email'
                //On text change listener on the searchable input
                onItemSelect={(val) => onSelectItem(val) || null}
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
                placeholder={selectedItem && selectedItem.name ? selectedItem.name.toString() : 'الرجاء أختيار ' + title}
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
