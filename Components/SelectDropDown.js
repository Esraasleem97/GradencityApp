import React from 'react';


import {SafeAreaView, StyleSheet, View} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

//Item array for the dropdown
const items = [
    //name key is must.It is to show the text in front
    {id: 1, name: 'angellist'},
    {id: 2, name: 'codepen'},
    {id: 3, name: 'envelope'},
    {id: 4, name: 'etsy'},
    {id: 5, name: 'facebook'},
    {id: 6, name: 'foursquare'},
    {id: 7, name: 'github-alt'},
    {id: 8, name: 'github'},
    {id: 9, name: 'gitlab'},
    {id: 10, name: 'instagram'},
];

const SelectDropDown = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    onItemSelect={(item) => alert(JSON.stringify(item))}
                    containerStyle={{padding: 5}}
                    textInputStyle={{
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6',
                    }}
                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                    }}
                    itemTextStyle={{
                        color: '#222',
                    }}
                    itemsContainerStyle={{
                        maxHeight: '60%',
                    }}
                    items={items}
                    defaultIndex={2}
                    placeholder="placeholder"
                    resetValue={false}
                    underlineColorAndroid="transparent"
                />

            </View>
        </SafeAreaView>
    );
};

export default SelectDropDown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});
