import React from "react";
import {StyleSheet, View} from 'react-native';
import {Card, Modal} from '@ui-kitten/components';
import {Container, Button, ButtonText} from "./Styles";

export const Modals = ({children, visible, setVisible}) => {

    return (
        <Container>
            <Modal
                style={{width:'90%'}}
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    {children}
                </Card>
            </Modal>
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
