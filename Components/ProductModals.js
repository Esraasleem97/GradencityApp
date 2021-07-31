import React from "react";
import {StyleSheet, View, Modal, Alert} from 'react-native';
import SelectDropDown from "./SelectDropDown";
import Input from "./Input";
import {FlexRow} from "./Styles";
import {Button as ButtonUI} from "@ui-kitten/components/ui/button/button.component";



const ProductModals = ({
                           setVisible,
                           visible,
                           products,
                           handleOnSelectProduct,
                           product,
                           modalQty,
                           handleOnSelectModalQty,
                           modalSubmitHandler,
                           ...props
                       }) => {

        return (
            <View  >
                <Modal {...props}

                       visible={visible}
                       animationType="slide"
                       transparent={true}
                       onRequestClose={() => {
                           Alert.alert("Modal has been closed.");
                           setVisible(!visible);
                       }}



                >
                    <View disabled={true} style={styles.centeredView}>
                        <SelectDropDown title='البند'
                                        items={products}
                                        onSelectItem={(val) => handleOnSelectProduct(val)}
                                        selectedItem={product}
                        />
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='الكمية'
                            keyboardType='numeric'
                            value={modalQty}
                            onChangeText={(val) => handleOnSelectModalQty(val)}
                        />

                        <FlexRow>
                            <ButtonUI onPress={modalSubmitHandler} status='success'
                                      style={styles.button}>
                                حفظ
                            </ButtonUI>
                            <ButtonUI onPress={() => setVisible(false)} status='basic'
                                      style={styles.button}>
                                إلغاء
                            </ButtonUI>
                        </FlexRow>
                    </View>
                </Modal>
            </View>
        )


}

export default ProductModals
const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        margin: 20,
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:'#fff'

    },

    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        margin: 5
    }
});
