import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import { Button, ButtonText} from "../Components/Styles";
import {useDispatch, useSelector} from "react-redux";
import {SEEDING, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {Alert} from "react-native";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import Transactions from "../Components/Transactions";
import ProductModals from "../Components/ProductModals";


const Seed = ({navigation, route}) => {

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

    const [product, setProduct] = useState(null);

    const [image, setImage] = useState(null);

    const dispatch = useDispatch()

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

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

        if (!tableData.length > 0) {
            return Alert.alert('', 'يجب ادخال البيانات أولا')
        }


        console.log(typeof products, Array.isArray(products))

        const form = new FormData();

        tableData.map((item, i) => {

                form.append('products[' + i + '][id]', (item[7].id))
                form.append('products[' + i + '][name]', (item[1]))
                form.append('products[' + i + '][quantity]', (item[3]))
                form.append('products[' + i + '][guid]', (item[7].guid))
                form.append('products[' + i + '][code]', (item[7].code))
                return form.append('products[' + i + '][image]', (item[2]))
            }
        )


        form.append('type', SEEDING)

        form.append('take_time', takeTime)

        console.log(form)
        dispatch(TransactionsHandler(form))

    }

    useEffect(() => {
        if (data && data.success) {
            setQty(null)
            setTakenTime(null)
            setProduct(null)
            setImage(null)
            setTableData([])
        }

    }, [data])

    const tableHead = ['كود', 'بند', 'صور', 'كمية', "طول", "عبوة", 'قطر', 'حذف'];

    const {params: {data: {products}}} = route

    const [tableData, setTableData] = useState([]);


    const handleSetTableData = (val) => {
        return setTableData(val)
    }

    const modalSubmitHandler = () => {
        if (product && qty) {
            tableData.push
            ([
                product.code,
                product.name,
                image,
                qty,
                product.height,
                product.size,
                product.diameter,
                product
            ])
            setProduct(null)
            setQty(null)
            setImage(null)
        } else {
            Alert.alert('', 'يجب ادخال البند و الكمية ')
        }
    }


    return (
        <Layout>
            <Header title='زراعة البذور' navigation={navigation} onTop={
                loading
                    ?
                    <ButtonText>
                        <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                    </ButtonText>
                    :
                    <>
                        <Button onPress={SubmitHandler}>
                            <ButtonText>حفظ</ButtonText>
                        </Button>
                    </>


            }/>


            <TransactionMessagesHandlerComponent data={data} error={error}/>

            <Transactions tableHead={tableHead}
                          tableData={tableData}
                          takeTime={takeTime}
                          onSelectTakeTime={handleOnSelectTakenTime}
                          setTableData={handleSetTableData}
                          hasImg={true}
            >
                <ProductModals
                    products={products}
                    handleOnSelectProduct={handleOnSelectProduct}
                    product={product}
                    modalQty={qty}
                    handleOnSelectModalQty={handleOnSelectQty}
                    modalSubmitHandler={modalSubmitHandler}
                    navigation={navigation}
                    handleOnSelectScannedProduct={handleOnSelectScannedProduct}
                    hasImg={true}
                    unlinkPickedImage={product === null}
                    onSelectImage={handleOnSelectImage}
                    takeTime={takeTime}
                    onSelectTakeTime={handleOnSelectTakenTime}

                />
            </Transactions>

        </Layout>
    )
}


export default Seed;