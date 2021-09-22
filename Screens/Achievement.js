import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";

import Header from "../Components/Header";


import {Button, ButtonText, Container, Content, FormArea} from "../Components/Styles";

import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";

import {ACHIEVEMENT, TransactionsHandler} from "../Redux/Actions/transactionActions";

import RefreshHandler from "../Components/RefreshHandler";
import Input from "../Components/Input";


const Achievement = ({navigation, route}) => {

    const {params: {data: {projects, products}}} = route



    const [takeTime, setTakenTime] = useState(null);

    const dispatch = useDispatch()

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction


    const onSelectTakeTime = (val) => {
        return setTakenTime(val)
    }



    const SubmitHandler = () => {

        const form = new FormData();


        form.append('type', ACHIEVEMENT)

        form.append('take_time', takeTime)

        dispatch(TransactionsHandler(form))

    }

    useEffect(() => {
        if (data && data.success) {

            setTakenTime(null)

        }

    }, [data])






    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation} onTop={
                loading
                    ?
                    <ButtonText>
                        <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                    </ButtonText>
                    :
                    <Button onPress={SubmitHandler}>
                        <ButtonText>حفظ</ButtonText>
                    </Button>
            }/>


            <TransactionMessagesHandlerComponent data={data} error={error}/>


            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <Input
                                label='أخرى'
                                icon='form'
                                placeholder='أخرى'

                            />
                            <Input
                                label='الوقت المستغرق بالدقائق'
                                icon='dashboard'
                                placeholder='00:00:00'
                                keyboardType='numeric'
                                value={takeTime}
                                onChangeText={onSelectTakeTime}
                            />

                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>


        </Layout>
    )
}

export default Achievement;