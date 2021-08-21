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
import {useDispatch, useSelector} from "react-redux";
import {CHECKIN, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {CHECK_IN} from "../Api";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import ProductModals from "../Components/ProductModals";
import SelectDropDown from "../Components/SelectDropDown";
const {white} = Colors

const ProjectsReceipt = ({navigation, route}) => {

    const [product, setProduct] = useState(null);

    const tableHead = ['الكود', 'البند', 'الكمية', 'الحذف'];

    const [tableData, setTableData] = useState([]);

    const [stock, setStock] = useState(null);

    const [project, setProject] = useState(null);

    const [takeTime, setTakeTime] = useState(null);

    const [visible, setVisible] = useState(false);

    const [modalQty, setModalQty] = useState(null);

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction



    const handleOnSelectProject = (val) => {
        return setProject(val)
    }
    const handleOnSelectStock = (val) => {
        return setStock(val)
    }

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectModalQty = (val) => {
        return setModalQty(val)
    }

    const handleOnSelectTakeTime = (val) => {
        return setTakeTime(val)
    }

    const handleSetTableData = (val) => {
        return setTableData(val)
    }


    const modalSubmitHandler = async () => {
        if (product && modalQty) {
            await tableData.push
            (
                [
                    product.id,
                    product.name,
                    modalQty,
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
            guid: item[3].guid,
            code: item[3].code
        }))

        dispatch(TransactionsHandler({
            products: products,
            take_time: takeTime,
            stock: stock ? stock.guid : '',
            project: project ? project.guid : '',
            type: CHECKIN
        }, CHECK_IN))

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


    const {params: {data: {stocks, projects, products}}} = route

    return (
        <Layout>
            <Header title='إستلام من المشاريع'  navigation={navigation}/>
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


export default ProjectsReceipt;

