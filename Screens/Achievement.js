import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";

import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {Button, ButtonText, width} from "../Components/Styles";
import Scanner from "../Components/Scanner";
import SharedScreens from "../Components/SharedScreen";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {Alert} from "react-native";
import {ACHIEVEMENT, TransactionsHandler} from "../Redux/Actions/transactionActions";


const Achievement = ({navigation, route}) => {

    const {params: {data: {projects, products}}} = route

    const [product, setProduct] = useState(null)

    const [project, setProject] = useState(null);

    const [qty, setQty] = useState(null);

    const [takeTime, setTakenTime] = useState(null);

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

    const [image, setImage] = useState(null);

    const handleOnSelectImage = (val) => {
        return setImage(val)
    }

    const SubmitHandler = () => {

        if (!product || !project) {
            return Alert.alert('', 'يجب ادخال البند ,المشروع أولا')
        }

        const {guid: product_id} = product

        const {guid: project_id} = project


        const data = new FormData();
        data.append('product_id', product_id)
        data.append('project_id', project_id)
        data.append('take_time', takeTime)
        data.append('qty', qty)
        data.append('image', image)
        data.append('type', ACHIEVEMENT)
        dispatch(TransactionsHandler(data))



    }

    useEffect(() => {
        if (data && data.success) {
            setQty(null)
            setTakenTime(null)
            setProduct(null)
            setImage(null)
            setProject(null)
        }
    }, [data])

    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>


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


                <SelectDropDown items={projects} title='المشروع'
                                onSelectItem={handleOnSelectProject}
                                selectedItem={project}
                />

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

export default Achievement;