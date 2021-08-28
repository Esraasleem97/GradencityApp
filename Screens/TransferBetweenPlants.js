import React, {useEffect, useState} from 'react';
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import ProductModals from "../Components/ProductModals";
import Transactions from "../Components/Transactions";
import {TRANSFER_PLANTS, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {TRANSFER} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonAdd, ButtonText, Colors, FlexEnd, FlexRow, ViewSelect} from "../Components/Styles";
import {Feather} from "@expo/vector-icons";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";

const {white} = Colors


const TransferBetweenPlants = ({navigation, route}) => {


    const {params: {data: {products, stocks}}} = route

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const [product, setProduct] = useState(null);

    const tableHead = ['كود', 'بند', 'كمية', "طول", "عبوة", 'قطر', 'حذف'];

    const [tableData, setTableData] = useState([]);

    const [inStock, setInStock] = useState(null);

    const [outStock, setOutStock] = useState(null);

    const [takeTime, setTakeTime] = useState(null);

    const [visible, setVisible] = useState(false);

    const [modalQty, setModalQty] = useState(null);

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectModalQty = (val) => {
        return setModalQty(val)
    }

    const handleOnSelectInStock = (val) => {
        return setInStock(val)
    }

    const handleOnSelectOutStock = (val) => {
        return setOutStock(val)
    }

    const handleOnSelectTakeTime = (val) => {
        return setTakeTime(val)
    }

    const handleSetTableData = (val) => {
        return setTableData(val)
    }
    const handleOnSelectScannedProduct = (val) => {
        return setProduct(val)
    }
    const modalSubmitHandler = async () => {
        if (product && modalQty) {
            await tableData.push
            (
                [
                    product.id,
                    product.name,
                    modalQty,
                    product.height,
                    product.size,
                    product.diameter,
                    product
                ]
            )
            setProduct(null)
            setModalQty(null)
            setVisible(false)
        }
    }

    const submitHandler = () => {

        const products = tableData.map(item => Object.assign({
            id: item[0],
            name: item[1],
            quantity: item[2],
            guid: item[6].guid,
            code: item[6].code
        }))

        dispatch(TransactionsHandler({
            products: products,
            take_time: takeTime,
            in_stock: inStock ? inStock.guid : '',
            out_stock: outStock ? outStock.guid : '',
            type: TRANSFER_PLANTS
        }, TRANSFER, true))

    }

    useEffect(() => {

        if (data && data.success) {
            setProduct(null)
            setInStock(null)
            setOutStock(null)
            setTakeTime(null)
            setModalQty(null)
            setTableData([])
        }
    }, [data])


    return (
        <Layout>
            <Header title='النقل بين المشاتل' navigation={navigation} onTop={
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




            <Transactions tableHead={tableHead}
                          tableData={tableData}
                          takeTime={takeTime}
                          onSelectTakeTime={handleOnSelectTakeTime}
                          setTableData={handleSetTableData}
                          submit={submitHandler}
                          loading={loading}
            >
                <FlexRow>
                    <ViewSelect>
                        <SelectDropDown title='من المستودع'
                                        items={stocks}
                                        onSelectItem={handleOnSelectInStock}
                                        selectedItem={inStock}
                        />
                    </ViewSelect>
                    <ViewSelect>
                        <SelectDropDown title='الى المستودع'
                                        items={stocks}
                                        onSelectItem={handleOnSelectOutStock}
                                        selectedItem={outStock}
                        />
                    </ViewSelect>
                </FlexRow>
                {
                    visible && <ProductModals
                        setVisible={setVisible}
                        visible={visible}
                        products={products}
                        handleOnSelectProduct={handleOnSelectProduct}
                        product={product}
                        modalQty={modalQty}
                        handleOnSelectModalQty={handleOnSelectModalQty}
                        modalSubmitHandler={modalSubmitHandler}
                        navigation={navigation}
                        handleOnSelectScannedProduct={handleOnSelectScannedProduct}

                    />
                }
                <FlexEnd>

                    <ButtonAdd onPress={() => setVisible(true)}>
                        <Feather name='plus' size={15} color={white}/>
                        <ButtonText>إضافة</ButtonText>
                    </ButtonAdd>
                </FlexEnd>
            </Transactions>
        </Layout>
    );
}

export default TransferBetweenPlants;