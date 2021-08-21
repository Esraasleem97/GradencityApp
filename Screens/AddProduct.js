import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea} from "../Components/Styles";
import Input from "../Components/Input";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {productCreateHandler} from "../Redux/Actions/productActions";
import SelectDropDown from "../Components/SelectDropDown";

import {groupsListHandler} from "../Redux/Actions/groupActions";
import {PRODUCTS_LIST_REFRESH} from "../Redux/Constants/productConstants";
import TakePicture from "../Components/Camera";


const AddProduct = ({navigation}) => {

    const dispatch = useDispatch();

    const [name, setName] = useState(null)

    const [vat, setVat] = useState(null)

    const [unit, setUnit] = useState(null)

    const [height, setHeight] = useState(null)

    const [size, setSize] = useState(null)

    const [diameter, setDiameter] = useState(null)

    const [group, setGroup] = useState(null)

    const {groupsList, createProduct} = useSelector(state => state);

    const {product, productLoading, error} = createProduct

    const {groups, groupLoading} = groupsList

    const handleOnSelectGroup = (val) => {
        return setGroup(val)

    }
    const SubmitHandler = () => {

        dispatch(productCreateHandler({
                name,
                height,
                size,
                diameter,
                vat,
                unit,
                group
            })
        )

    }

    useEffect(() => {

        if (product && product.success) {
            dispatch({type: PRODUCTS_LIST_REFRESH})
            setHeight(null)
            setSize(null)
            setDiameter(null)
            setName(null)
            setVat(null)
            setUnit(null)
            setGroup(null)
        }
    }, [product])

    useEffect(() => {
        dispatch(groupsListHandler())
    }, [dispatch])


    return (
        <Layout>
            <Header title='إضافة بند جديد' navigation={navigation}/>
            <TransactionMessagesHandlerComponent data={product} error={error}/>
            <RefreshHandler>

                {
                    !groupLoading ? <Container>
                            <Content>
                                <FormArea>
                                    <View>

                                        <SelectDropDown items={groups} title='المجموعة'
                                                        onSelectItem={handleOnSelectGroup}
                                                        selectedItem={group}/>

                                        <Input
                                            label='أسم البند '
                                            icon='form'
                                            placeholder='ادخل أسم البند  هنا'
                                            onChangeText={(val) => setName(val)}
                                            value={name}
                                        />


                                        <Input
                                            label='الوحدة '
                                            icon='form'
                                            placeholder='ادخل الوحدة هنا'
                                            onChangeText={(val) => setUnit(val)}
                                            value={unit}
                                        />
                                        <FlexStyled>

                                            <Input
                                                label='نسبة الضريبة'
                                                icon='form'
                                                placeholder='الضريبة'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setVat(val)}
                                                value={vat}
                                            />
                                            <Input
                                                label='الطول'
                                                icon='form'
                                                placeholder='الطول'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setHeight(val)}
                                                value={height}
                                            />
                                            <Input
                                                label='الحجم'
                                                icon='form'
                                                placeholder='الحجم'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setSize(val)}
                                                value={size}
                                            />
                                            <Input
                                                label='القطر'
                                                icon='form'
                                                placeholder='القطر'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setDiameter(val)}
                                                value={diameter}
                                            />


                                        </FlexStyled>
                                        <TakePicture/>
                                        {
                                            productLoading
                                                ?
                                                <ButtonText>
                                                    <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                                                </ButtonText>
                                                :
                                                <Button onPress={SubmitHandler}>
                                                    <ButtonText>حفظ</ButtonText>
                                                </Button>
                                        }
                                    </View>
                                </FormArea>
                            </Content>
                        </Container>
                        :
                        <ButtonText>
                            <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                        </ButtonText>
                }

            </RefreshHandler>
        </Layout>
    )
}
export default AddProduct;