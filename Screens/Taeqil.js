import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {Alert} from "react-native";
import {Button, ButtonText, ViewSelectScan} from "../Components/Styles";
import {useDispatch, useSelector} from "react-redux";
import {IMPACT, TransactionsHandler} from "../Redux/Actions/transactionActions";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";

import Scanner from "../Components/Scanner";


const Taeqil = ({navigation, route}) => {

    const {params: {data: {products}}} = route

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

    const [product, setProduct] = useState(null);

    const dispatch = useDispatch()


    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const [image, setImage] = useState(null);

    const handleOnSelectImage = (val) => {
        return setImage(val)
    }

    const handleOnSelectQty = (val) => {
        return setQty(val)
    }

    const handleOnSelectTakenTime = (val) => {
        return setTakenTime(val)
    }

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectScannedProduct = (val) => {
        return setProduct(val)
    }

    const SubmitHandler = () => {
        if (!product) {
            return Alert.alert('', 'يجب ادخال البند أولا')
        }
        const {guid: product_id} = product

        const data = new FormData();

        data.append('product_id', product_id)

        data.append('take_time', takeTime)

        data.append('qty', qty)

        if (image !== null) {
            data.append('image', image)
        }


        data.append('type', IMPACT)

        dispatch(TransactionsHandler(data))


    }


    useEffect(() => {
        if (data && data.success) {
            setQty(null)
            setTakenTime(null)
            setProduct(null)
            setImage(null)
        }
    }, [data])


    return (
        <Layout>
            <Header title='التعقيل' navigation={navigation} onTop={
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

            <SharedScreens
                unlinkPickedImage={data && data.success}
                onSelectImage={handleOnSelectImage}
                onTop={true}
                onSelectQty={handleOnSelectQty}
                onSelectTakenTime={handleOnSelectTakenTime}
                qty={qty}
                takeTime={takeTime}
                >

                <Scanner navigation={navigation} handler={handleOnSelectScannedProduct}
                         products={products}>

                    <ViewSelectScan>
                        <SelectDropDown items={products}
                                        onSelectItem={handleOnSelectProduct}
                                        selectedItem={product}

                        />
                    </ViewSelectScan>
                </Scanner>
            </SharedScreens>
        </Layout>

    )
}

export default Taeqil;