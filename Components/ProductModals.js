import React from "react";
import {StyleSheet, View} from 'react-native';
import SelectDropDown from "./SelectDropDown";
import Input from "./Input";
import {BtnIcon, ButtonAdd, Colors, FlexWrap, LabelIcon, ViewSelectScan} from "./Styles";
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
                           takeTime,
                           onSelectTakeTime,
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
                    <View style={{width: hasImg ? '55%' : '65%'}}>
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='الكمية'
                            keyboardType='numeric'
                            value={modalQty}
                            onChangeText={(val) => handleOnSelectModalQty(val)}
                        />
                    </View>

                    <View>
                        {hasImg && <TakePicture hasImg={hasImg} onSelectImage={onSelectImage}
                                                unlinkPickedImage={unlinkPickedImage}/>}
                    </View>
                    <View>
                        <LabelIcon style={{textAlign:'right'}}>إضافة</LabelIcon>
                        <BtnIcon onPress={modalSubmitHandler} style={{backgroundColor: Colors.green1}}>
                            <Feather name='plus' size={15} color={white}/>
                        </BtnIcon>
                    </View>

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
