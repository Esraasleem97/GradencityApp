import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FormArea, Line} from "../Components/Styles";
import Input from "../Components/Input";


const AddProject = ({navigation}) => {
    return (
        <Layout>
            <Header title='إضافة مشروع' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                            <Input
                                label='اسم المشروع'
                                icon='form'
                                placeholder='المشروع'
                            />

                            <Button>
                                <ButtonText>تعديل</ButtonText>
                            </Button>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}

export default AddProject;