import React from "react";
import {StyleSheet, View} from 'react-native';
import SelectDropDown from "./SelectDropDown";
import Input from "./Input";
import {FlexRow} from "./Styles";
import {Button as ButtonUI} from "@ui-kitten/components/ui/button/button.component";
import {Card, Modal} from "@ui-kitten/components";


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
        <View>
            <Modal {...props}
                   style={styles.container}
                   visible={visible}
                   backdropStyle={styles.backdrop}
                   onBackdropPress={() => setVisible(false)}
            >
                <Card disabled={true}>
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
                </Card>
            </Modal>
        </View>
    )

}

export default ProductModals
const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
