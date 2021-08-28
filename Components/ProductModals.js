import React from "react";
import {StyleSheet, View} from 'react-native';
import SelectDropDown from "./SelectDropDown";
import Input from "./Input";
import {ButtonAdd, ButtonText, Colors, FlexRow, ViewSelectScan} from "./Styles";
import Scanner from "./Scanner";
import {Feather} from "@expo/vector-icons";

const {white} = Colors


const ProductModals = ({
                           products,
                           handleOnSelectProduct,
                           product,
                           modalQty,
                           handleOnSelectModalQty,
                           modalSubmitHandler,
                           navigation,
                           handleOnSelectScannedProduct,
                       }) => {

    return (
        <View>
            <View disabled={true} style={styles.centeredView}>
                <Scanner navigation={navigation} handler={handleOnSelectScannedProduct}
                         products={products}>

                    <ViewSelectScan>
                        <SelectDropDown items={products}
                                        onSelectItem={handleOnSelectProduct}
                                        selectedItem={product}

                        />
                    </ViewSelectScan>
                </Scanner>


                <FlexRow>
                    <View style={{width: '70%'}}>
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='الكمية'
                            keyboardType='numeric'
                            value={modalQty}
                            onChangeText={(val) => handleOnSelectModalQty(val)}
                        />
                    </View>
                    <ButtonAdd onPress={modalSubmitHandler}>
                        <Feather name='plus' size={15} color={white}/>
                        <ButtonText>إضافة</ButtonText>
                    </ButtonAdd>
                </FlexRow>
            </View>

        </View>
    )


}

export default ProductModals
const styles = StyleSheet.create({
    centeredView: {
        width: '100%'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        margin: 5
    }
});
