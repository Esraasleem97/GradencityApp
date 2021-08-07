import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');


const OfflineNotification = () => {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

export default OfflineNotification;


const styles = StyleSheet.create({
    offlineContainer: {

        justifyContent: 'center',
        backgroundColor: '#a12d2d',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'relative',
        top: 0,
        zIndex: 100,
        opacity: .8,
    },
    offlineText: {
        color: '#fff'
    }
});
