import React, {useEffect, useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import {
    ButtonAdd,
    ButtonText,
    Colors,
    FlexEnd
} from "../Components/Styles";
import {Feather} from "@expo/vector-icons";
import Transactions from "../Components/Transactions";
import SelectDropDown from "../Components/SelectDropDown";
import ProductModals from "../Components/ProductModals";
import {CHECKOUT, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {useDispatch, useSelector} from "react-redux";
import {CHECK_OUT} from "../Api";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";

const {white} = Colors

const Checkout = ({navigation, route}) => {

    const tableHead = ['الرقم', 'البند', 'الكمية', 'الاجراء'];

    const [product, setProduct] = useState(null);

    const [stock, setStock] = useState(null);

    const [project, setProject] = useState(null);

    const [takeTime, setTakeTime] = useState(null);

    const [modalQty, setModalQty] = useState(null);

    const [visible, setVisible] = useState(false);

    const [tableData, setTableData] = useState([]);

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectProject = (val) => {
        return setProject(val)
    }
    const handleOnSelectStock = (val) => {
        return setStock(val)
    }

    const handleOnSelectTakeTime = (val) => {
        return setTakeTime(val)
    }

    const handleSetTableData = (val) => {
        return setTableData(val)
    }

    const handleOnSelectModalQty = (val) => {
        return setModalQty(val)
    }

    useEffect(() => {

        if (data && data.success) {
            setProduct(null)
            setStock(null)
            setProject(null)
            setTakeTime(null)
            setModalQty(null)
            setTableData([])
        }
    }, [data])

    const modalSubmitHandler = async () => {
        if (product && modalQty) {
            await tableData.push
            ([
                    product.id,
                    product.name,
                    modalQty,
                    product
                ])
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
            guid: item[3].guid,
            code: item[3].code
        }))

        dispatch(TransactionsHandler({
            products: products,
            take_time: takeTime,
            stock: stock ? stock.guid : '',
            project: project ? project.guid : '',
            type: CHECKOUT
        }, CHECK_OUT))

    }

    const {params: {data: {stocks, projects, products}}} = route

    return (
        <Layout>
            <Header title='الإخراج' navigation={navigation}/>

            <TransactionMessagesHandlerComponent data={data} error={error}/>


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

                />
            }


            <Transactions tableHead={tableHead}
                          tableData={tableData}
                          takeTime={takeTime}
                          onSelectTakeTime={handleOnSelectTakeTime}
                          setTableData={handleSetTableData}
                          submit={submitHandler}
                          loading={loading}
            >


                <SelectDropDown title='أسم المشروع'
                                items={projects}
                                onSelectItem={handleOnSelectProject}
                                selectedItem={project}
                />

                <SelectDropDown title='المستودع'
                                items={stocks}
                                onSelectItem={handleOnSelectStock}
                                selectedItem={stock}
                />

                <FlexEnd>

                    <ButtonAdd onPress={() => setVisible(true)}>
                        <Feather name='plus' size={15} color={white}/>
                        <ButtonText>إضافة</ButtonText>
                    </ButtonAdd>
                </FlexEnd>


            </Transactions>

        </Layout>
    )
}


export default Checkout;


