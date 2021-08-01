import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea} from "../Components/Styles";
import Input from "../Components/Input";
import {View} from "react-native";
import {ROTATE_TYPE, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {ROTATE} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";


const AddProduct = ({navigation}) => {

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const [takeTime, setTakeTime] = useState(null)

    const [name, setName] = useState(null)

    const [qty, setQty] = useState(null)

    const [height, setHeight] = useState(null)

    const [size, setSize] = useState(null)

    const [diameter, setDiameter] = useState(null)


    const submitHandler = () => {
            dispatch(TransactionsHandler({
                take_time: takeTime,
                name,
                qty,
                height,
                size,
                diameter,
                type: ROTATE_TYPE
            }, ROTATE))

    }

    useEffect(() => {

        if (data && data.success) {
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
                                   <View>
                                        <Input
                                            label='أسم البند '
                                            icon='form'
                                            placeholder='ادخل أسم البند  هنا'
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
                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}
export default AddProduct;