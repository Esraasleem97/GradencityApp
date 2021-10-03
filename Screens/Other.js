import React, {useEffect, useState} from "react";
import {Layout, Spinner, Text} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import Input from "../Components/Input";
import {Alert, LogBox, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {PRODUCTS_LIST_REFRESH} from "../Redux/Constants/productConstants";
import SharedScreens from "../Components/SharedScreen";


const Other = ({navigation, route}) => {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    const {params: {data: {products, stocks}}} = route

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction


    const [takeTime, setTakeTime] = useState(null)

    const [name, setName] = useState(null)

    const [qty, setQty] = useState(null)


    useEffect(() => {


        if (data && data.success) {
            dispatch({type: PRODUCTS_LIST_REFRESH})
            setTakeTime(null)
            setName(null)
            setQty(null)
        }
    })

    return (
        <Layout>
            <Header title='أُخرى' navigation={navigation} onTop={
                loading
                    ?
                    <ButtonText>
                        <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                    </ButtonText>
                    :
                    <Button>
                        <ButtonText>حفظ</ButtonText>
                    </Button>
            }/>

            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <SharedScreens
                onTop={true}>
                <Input
                    label='الموضوع'
                    icon='form'
                    placeholder='ادخل الموضوع'
                    onChangeText={(val) => setName(val)}
                    value={name}
                    returnKeyType="next"/>
            </SharedScreens>
            {/*<RefreshHandler>*/}
            {/*    <Container>*/}
            {/*        <Content>*/}
            {/*            <FormArea>*/}

            {/*                <Input*/}
            {/*                    label='الموضوع'*/}
            {/*                    icon='form'*/}
            {/*                    placeholder='ادخل الموضوع'*/}
            {/*                    onChangeText={(val) => setName(val)}*/}
            {/*                    value={name}*/}
            {/*                    returnKeyType="next"*/}
            {/*                />*/}
            {/*                <Input*/}
            {/*                    label='الكمية'*/}
            {/*                    icon='form'*/}
            {/*                    placeholder='ادخل الكمية هنا'*/}
            {/*                    keyboardType='numeric'*/}
            {/*                    onChangeText={(val) => setQty(val)}*/}
            {/*                    value={qty}*/}
            {/*                />*/}

            {/*                <Input*/}
            {/*                    label='الكمية'*/}
            {/*                    icon='form'*/}
            {/*                    placeholder='ادخل الكمية هنا'*/}
            {/*                    keyboardType='numeric'*/}
            {/*                    onChangeText={(val) => setQty(val)}*/}
            {/*                    value={qty}*/}
            {/*                />*/}


            {/*            </FormArea>*/}
            {/*        </Content>*/}
            {/*    </Container>*/}
            {/*</RefreshHandler>*/}

        </Layout>
    )
}
export default Other;