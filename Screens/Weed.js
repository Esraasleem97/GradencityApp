import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "react-native";
import {TransactionsHandler, WEEDING} from "../Redux/Actions/transactionActions";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {BtnScan, Button, ButtonText, Scan, width} from "../Components/Styles";
import {AntDesign} from "@expo/vector-icons";

const Weed = ({navigation, route}) => {

    const {params: {data: {products}}} = route

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

    const [product, setProduct] = useState(null);

    const dispatch = useDispatch()


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

        dispatch(TransactionsHandler({
            product_id,
            take_time: takeTime,
            qty,
            type: WEEDING
        }))

    }

    useEffect(() => {
        if (data && data.success) {
            setQty(null)
            setTakenTime(null)
            setProduct(null)
        }
    }, [data])


    return (
        <Layout>
            <Header title='التعشيب' navigation={navigation}/>
            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <SharedScreens
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

                <Scan>
                    <SelectDropDown items={products} onSelectItem={handleOnSelectProduct} selectedItem={product}
                                    style={{width: width - 120}}/>

                    <BtnScan style={{marginTop: 26}}
                             onPress={() => navigation.navigate('Scanner', {
                                 products,
                                 handleOnSelectScannedProduct
                             })}
                    >
                        <ButtonText>
                            <AntDesign name='search1' size={20}/>
                        </ButtonText>

                    </BtnScan>
                </Scan>
            </SharedScreens>
        </Layout>
    )
}

export default Weed;