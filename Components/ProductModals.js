import React from "react";
import {StyleSheet, View} from 'react-native';
import SelectDropDown from "./SelectDropDown";
import Input from "./Input";
import {ButtonAdd, ButtonText, Colors, FlexWrap, ViewSelectScan} from "./Styles";
import Scanner from "./Scanner";
import {Feather} from "@expo/vector-icons";
import TakePicture from "./Camera";

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
                           hasImg = false,
                           onSelectImage,
                           unlinkPickedImage,
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


                <FlexWrap>
                    <View style={{width: hasImg ? '35%' :'65%'  }}>
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='الكمية'
                            keyboardType='numeric'
                            value={modalQty}
                            onChangeText={(val) => handleOnSelectModalQty(val)}
                        />
                    </View>
                    <View style={{marginTop:15}}>
                    {hasImg && <TakePicture  hasImg={hasImg} onSelectImage={onSelectImage} unlinkPickedImage={unlinkPickedImage}/>}
                    </View>

                        <ButtonAdd onPress={modalSubmitHandler} style={{marginTop:10}}>
                        <Feather name='plus' size={15} color={white}/>
                        <ButtonText>إضافة</ButtonText>
                    </ButtonAdd>

                </FlexWrap>
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
