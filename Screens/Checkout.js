import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import {
    ButtonAdd,
    ButtonText,
    Colors,
    FlexEnd
} from "../Components/Styles";
import {Feather} from "@expo/vector-icons";
import CheckoutShared from "../Components/CheckoutShared";
import SelectDropDown from "../Components/SelectDropDown";
import ProductModals from "../Components/ProductModals";

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

    const handleOnSelectModalQty = (val) => {
        return setModalQty(val)
    }

    const modalSubmitHandler = async () => {
        if (product && modalQty) {
            await tableData.push
            (
                [
                    product.id,
                    product.name,
                    modalQty,
                    ''
                ]
            )
            setProduct(null)
            setModalQty(null)
            setVisible(false)
        }
    }

    const handleSetTableData = (val) => {
        return setTableData(val)
    }


    const {params: {data: {stocks, projects, products}}} = route

    return (
        <Layout>
            <Header title='الإخراج' navigation={navigation}/>
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


            <CheckoutShared tableHead={tableHead}
                            tableData={tableData}
                            takeTime={takeTime}
                            onSelectTakeTime={handleOnSelectTakeTime}
                            setTableData={handleSetTableData}
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


            </CheckoutShared>

        </Layout>
    )
}


export default Checkout;


