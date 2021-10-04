import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";

import {Button, ButtonText} from "../Components/Styles";
import Input from "../Components/Input";
import {Alert, LogBox} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {PRODUCTS_LIST_REFRESH} from "../Redux/Constants/productConstants";
import SharedScreens from "../Components/SharedScreen";
import {OTHERS, TransactionsHandler} from "../Redux/Actions/transactionActions";
import SelectDropDown from "../Components/SelectDropDown";


const Other = ({navigation, route}) => {

    const {params: {data: {projects}}} = route

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const [takeTime, setTakenTime] = useState(null)

    const [subject, setSubject] = useState(null)

    const [qty, setQty] = useState(null)

    const [image, setImage] = useState(null)

    const [project, setProject] = useState(null);

    const handleOnSelectQty = (val) => {
        return setQty(val)
    }

    const handleOnSelectProject = (val) => {
        return setProject(val)
    }

    const handleOnSelectTakenTime = (val) => {
        return setTakenTime(val)
    }

    const handleOnSelectImage = (val) => {
        return setImage(val)
    }

    useEffect(() => {
        if (data && data.success) {
            dispatch({type: PRODUCTS_LIST_REFRESH})
            setTakenTime(null)
            setSubject(null)
            setQty(null)
            setImage(null)
            setProject(null)
        }
    }, [data])

    const SubmitHandler = () => {
        if (qty === null || subject === null || takeTime === null || project === null) {
            console.log(project)
            return Alert.alert('تنبيه', 'يجب ادخال جميع البيانات')
        }
        const form = new FormData();

        form.append('type', OTHERS)

        form.append('take_time', takeTime)

        form.append('note', subject)

        form.append('project_id', project.guid)

        form.append('products[0][quantity]', qty)

        form.append('products[0][image]', image)

        dispatch(TransactionsHandler(form))

    }

    return (
        <Layout>
            <Header title='أُخرى' navigation={navigation} onTop={
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
                unlinkPickedImage={subject === null}
                onSelectImage={handleOnSelectImage}
                onSelectTakenTime={handleOnSelectTakenTime}
                onSelectQty={handleOnSelectQty}
                takeTime={takeTime}
                qty={qty}
                onTop={true}>

                <SelectDropDown items={projects} title='المشروع'
                                onSelectItem={handleOnSelectProject}
                                selectedItem={project}
                />

                <Input
                    label='الموضوع'
                    icon='form'
                    placeholder='ادخل الموضوع'
                    onChangeText={(val) => setSubject(val)}
                    value={subject}
                    returnKeyType="next"/>
            </SharedScreens>
        </Layout>
    )
}
export default Other;