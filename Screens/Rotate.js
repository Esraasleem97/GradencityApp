import React, {useEffect, useState} from "react";
import {Layout, Spinner, Text} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {Alert, LogBox,  View} from "react-native";
import {ROTATE_TYPE, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {ROTATE} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {PRODUCTS_LIST_REFRESH} from "../Redux/Constants/productConstants";


const Rotate = ({navigation, route}) => {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    const {params: {data: {products, stocks}}} = route

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

    const setDefaultStock = stocks ? stocks.filter(stock => stock.guid === 'B34050DE-935F-4230-BD93-619D395C5268') : null

    const [stock, setStock] = useState(setDefaultStock[0]);

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
            product.quantity = qty; // for backend
            product.GUID = product.guid;  // for backend
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
            }, ROTATE , true))
        }


    }

    useEffect(() => {


        if (data && data.success) {
            dispatch({type: PRODUCTS_LIST_REFRESH})
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
            <Header title='التدوير' navigation={navigation} onTop={
                loading
                    ?
                    <ButtonText>
                        <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                    </ButtonText>
                    :
                    <Button onPress={submitHandler}>
                        <ButtonText>حفظ</ButtonText>
                    </Button>
            }/>

            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>

                            <SelectDropDown title='المستودع'
                                            items={stocks}
                                            onSelectItem={handleOnSelectStock}
                                            selectedItem={stock}
                                            style={{fontSize: 20, marginRight: 50, flex: 1}}
                            />

                            <SelectDropDown items={products}
                                            onSelectItem={(val) => handleOnSelectProduct(val)}
                                            selectedItem={product}
                                            title='البند القديم'
                                            style={{fontSize: 20, marginRight: 50, flex: 1}}>
                            </SelectDropDown>

                            {
                                product &&
                                <View>
                                    <Text style={{marginTop: 12, flex: 1}}>الكمية الحالية : {product.qty}</Text>
                                </View>

                            }


                            <Line/>
                            {
                                product && Number(product.qty) >= 0

                                    ? <View>
                                        <Input
                                            label='اسم البند الجديد'
                                            icon='form'
                                            placeholder='ادخل اسم البند الجديد هنا'
                                            onChangeText={(val) => setName(val)}
                                            value={product.name}
                                            returnKeyType="next"

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
                                                autoFocus = {true}

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
                                                label='الوقت المستغرق بالدقائق'
                                                icon='dashboard'
                                                placeholder='00:00'
                                                keyboardType='numeric'
                                                onChangeText={(val) => setTakeTime(val)}
                                                value={takeTime}
                                                returnKeyType="next"
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
                                    : product && Number(product.qty) < 0
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
export default Rotate;