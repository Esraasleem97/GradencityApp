import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";

import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";

import {Button, ButtonText} from "../Components/Styles";

import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {Alert} from "react-native";
import {ACHIEVEMENT, TransactionsHandler} from "../Redux/Actions/transactionActions";
import Transactions from "../Components/Transactions";
import ProductModals from "../Components/ProductModals";


const Achievement = ({navigation, route}) => {

    const {params: {data: {projects, products}}} = route

    const [product, setProduct] = useState(null)

  //  const [other, setOther] = useState(null)

    const [project, setProject] = useState(null);

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

    const [image, setImage] = useState(null);

    const dispatch = useDispatch()

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectProject = (val) => {
        return setProject(val)
    }

    const handleOnSelectScannedProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectQty = (val) => {
        return setQty(val)
    }

    const handleOnSelectTakenTime = (val) => {
        return setTakenTime(val)
    }



    const handleOnSelectImage = (val) => {
        return setImage(val)
    }

    const SubmitHandler = () => {

        if (!tableData.length > 0) {
            return Alert.alert('', 'يجب ادخال البيانات أولا')
        }

        if (!project) {
            return Alert.alert('', 'يجب ادخال المشروع أولا')
        }


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


        const {guid: project_id} = project


        form.append('project_id', project_id)

        form.append('type', ACHIEVEMENT)

        form.append('take_time', takeTime)

       // form.append('note', other)

        dispatch(TransactionsHandler(form))

    }

    useEffect(() => {
        if (data && data.success) {
            setQty(null)
            setTakenTime(null)
            setProduct(null)
            setImage(null)
            setTableData([])
            setProject(null)
      //      setOther(null)
        }

    }, [data])

    const tableHead = ['كود', 'بند', 'صور', 'كمية', "طول", "عبوة", 'قطر', 'حذف'];


    const [tableData, setTableData] = useState([]);


    const handleSetTableData = (val) => {
        return setTableData(val)
    }

    // const handleOnSelectOther = (val) => {
    //     return setOther(val)
    // }

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


            <Transactions tableHead={tableHead}
                          tableData={tableData}
                          takeTime={takeTime}
                          onSelectTakeTime={handleOnSelectTakenTime}
                          setTableData={handleSetTableData}
                         // otherValue={other}
                        //  onSelectOther={handleOnSelectOther}
                          hasImg={true}
                         // other={true}
            >

                <SelectDropDown items={projects} title='المشروع'
                                onSelectItem={handleOnSelectProject}
                                selectedItem={project}
                />

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

export default Achievement;