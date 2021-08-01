import React, {useEffect, useState} from "react";
import {Layout, Spinner, Text} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {Alert, View} from "react-native";
import {ROTATE_TYPE, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {ROTATE} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";


const AddClause = ({navigation, route}) => {

    // const {params: {data: {products, stocks}}} = route

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const [product, setProduct] = useState(null)

    const [takeTime, setTakeTime] = useState(null)

    const [name, setName] = useState(null)

    const [qty, setQty] = useState(null)

    const [height, setHeight] = useState(null)

    const [size, setSize] = useState(null)

    const [diameter, setDiameter] = useState(null)

    const [stock, setStock] = useState(null);

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectStock = (val) => {
        return setStock(val)
    }

    const submitHandler = () => {

        if (qty > Number(product.qty)) {
            return Alert.alert('تنبيه !', 'لا يمكن لكمية البند الجديد ان تكون أكبر من الكمية الحالية. ')
        }


        if (stock && products) {

            const products = []
            product.quantity = qty ; // for backend
            product.GUID = product.guid ;  // for backend
            products.push(product)


            dispatch(TransactionsHandler({
                products,
                take_time: takeTime,
                name,
                qty,
                height,
                size,
                diameter,
                stock: stock.guid,
                type: ROTATE_TYPE
            }, ROTATE))
        }


    }

    useEffect(() => {

        if (data && data.success) {
            setProduct(null)
            setStock(null)
            setHeight(null)
            setSize(null)
            setDiameter(null)
            setTakeTime(null)
            setName(null)
            setQty(null)
        }
    }, [data])

    return (
        <Layout>
            <Header title='إضافة بند جديد' navigation={navigation}/>
            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            {
                                product &&
                                <View>
                                    <Text style={{marginTop: 12, flex: 1}}>الكمية الحالية : {product.qty}</Text>
                                </View>

                            }


                            <Line/>
                            {
                                product && Number(product.qty) > 0

                                    ? <View>
                                        <Input
                                            label='أسم البند الجديد'
                                            icon='form'
                                            placeholder='ادخل أسم البند الجديد هنا'
                                            onChangeText={(val) => setName(val)}
                                            value={name}
                                        />
                                        <Input
                                            label='الكمية'
                                            icon='form'
                                            placeholder='ادخل الكمية هنا'
                                            keyboardType='numeric'
                                            onChangeText={(val) => setQty(val)}
                                            value={qty}

                                        />
                                        <FlexStyled>
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

                                            <Input
                                                label='الوقت المستغرق'
                                                icon='dashboard'
                                                placeholder='00:00'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setTakeTime(val)}
                                                value={takeTime}
                                            />

                                        </FlexStyled>
                                        {
                                            loading
                                                ?
                                                <ButtonText>
                                                    <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                                                </ButtonText>
                                                :
                                                <Button onPress={submitHandler}>
                                                    <ButtonText>حفظ</ButtonText>
                                                </Button>
                                        }

                                    </View>
                                    : product && Number(product.qty) === 0
                                        ? <Text style={{color: '#dc3838'}}>
                                            يجب ان تكون الكمية الحالية للبند أكبر من صفر
                                            لأتمام العملية</Text>
                                        : null
                            }

                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}
export default AddClause;