import React from "react";
import {StyleSheet} from 'react-native';
import {Card, Modal} from '@ui-kitten/components';


export const Modals = ({children, visible, setVisible}) => {

    return (
            <Modal
                style={{width:'90%'}}
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    {children}
                </Card>
            </Modal>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
