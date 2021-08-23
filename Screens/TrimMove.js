import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "react-native";
import { TransactionsHandler, TRIM} from "../Redux/Actions/transactionActions";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {Button, ButtonText, width} from "../Components/Styles";
import Scanner from "../Components/Scanner";

const TrimMove = ({navigation, route}) => {

    const {params: {data: {products}}} = route

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

    const [product, setProduct] = useState(null);

    const dispatch = useDispatch()

    const [image, setImage] = useState(null);

    const handleOnSelectImage = (val) => {
        return setImage(val)
    }

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

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


        data.append('type', TRIM)

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
            <Header title='تقليم ونقل' navigation={navigation}/>
            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <SharedScreens
                unlinkPickedImage={data && data.success}
                onSelectImage={handleOnSelectImage}
                onTop={true}
                onSelectQty={handleOnSelectQty}
                onSelectTakenTime={handleOnSelectTakenTime}
                qty={qty}
                takeTime={takeTime}
                onBottom={

                    loading
                        ?
                        <ButtonText>
                            <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                        </ButtonText>
                        :
                        <Button onPress={SubmitHandler}>
                            <ButtonText>حفظ</ButtonText>
                        </Button>
                }>

                <Scanner navigation={navigation} handler={handleOnSelectScannedProduct}
                         products={products}>

                    <SelectDropDown items={products}
                                    onSelectItem={handleOnSelectProduct}
                                    selectedItem={product}
                                    style={{width: width - 120}}
                    />
                </Scanner>
            </SharedScreens>
        </Layout>

    )
}

export default TrimMove;