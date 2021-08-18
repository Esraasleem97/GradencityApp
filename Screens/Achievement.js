import React, {useState} from "react";
import {
    Layout,
    CheckBox, Text, Spinner
} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";
import {View} from "react-native";
import Input from "../Components/Input";
import {Button, ButtonText, Container, Content, FormArea} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";


const Achievement = ({navigation, route}) => {

    const [isChooseNewProject, setIsChooseNewProject] = useState(false);

    const [isChooseNewProduct, setIsChooseNewProduct] = useState(false);

    const chooseProjectHandler = () => {
        setIsChooseNewProject(!isChooseNewProject)
    }

    const chooseProductHandler = () => {
        setIsChooseNewProduct(!isChooseNewProduct)
    }


    const {params: {data: {projects, products, groups}}} = route

    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>
            <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        <SelectDropDown items={projects} title='المشروع'/>
                        <SelectDropDown items={products} title='البند'/>
                        <Input

                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الكمية هنا'
                            keyboardType='number-pad'


                        />

                                {/*<ButtonText>*/}
                                {/*    <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>*/}
                                {/*</ButtonText>*/}

                                <Button>
                                    <ButtonText>حفظ</ButtonText>
                                </Button>

                    </FormArea>
                </Content>
            </Container>
            </RefreshHandler>
        </Layout>
    )
}

export default Achievement;