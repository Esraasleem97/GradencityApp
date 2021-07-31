import React from "react";
import {StyleSheet, View, Modal, Alert} from 'react-native';
import {Card} from '@ui-kitten/components';


export const Modals = ({setVisible, visible, children }) => {

    return (<Modal
        style={{width: '90%'}}
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisible(!visible);
        }}>
        <Card disabled={true}>
            <View>
                {children}
            </View>

        </Card>
    </Modal>)

}


const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
