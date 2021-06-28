import React from 'react';
import {ActivityIndicator, View , StyleSheet} from "react-native";
export const Loader = ({color= '#005fff'}) => {
    return (
        <>

            <View style={[styles.container, styles.horizontal]}>

                <ActivityIndicator size="large" color={color} />
            </View>
        </>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center" ,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Loader;