import React, {useState} from "react";
import {
    Layout,
    CheckBox, Text
} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";
import {View} from "react-native";
import Input from "../Components/Input";
import {Container, Content, FormArea} from "../Components/Styles";


const Achievement = ({navigation, route}) => {

    const [isChooseNewProject, setIsChooseNewProject] = useState(false);

    const [isChooseNewProduct, setIsChooseNewProduct] = useState(false);

    const chooseProjectHandler = () => {
        setIsChooseNewProject(!isChooseNewProject)
    }

    const chooseProductHandler = () => {
        setIsChooseNewProduct(!isChooseNewProduct)
    }


    const {params: {data: {projects, products , groups}}} = route

    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>
            <Container>
                <Content>
            <FormArea>
                <SelectDropDown items={projects} title='المشروع'/>
                <SelectDropDown items={products}/>
                <Input

                    label='الكمية'
                    icon='form'
                    placeholder='ادخل الكمية هنا'
                    keyboardType='number-pad'



                />
            </FormArea>
                </Content>
            </Container>

        </Layout>
    )
}

export default Achievement;