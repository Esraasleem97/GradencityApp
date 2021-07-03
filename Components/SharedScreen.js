import React from "react";
import {Button, ButtonText, Container, Content, ForgetPassword, FormArea} from "./Styles";
import Input from "./Input";
import {Formik} from "formik";
import {KeyboardAvoidingView} from "react-native";

const SharedScreens = () =>{

    return(
        <Container>
            <KeyboardAvoidingView>
            <Content>

                <Formik
                    initialValues={{clause: '', password: ''}}
                    onSubmit={(value) => console.log(value)}>
                    {
                        ({handleChange, handleBlur, values}) =>
                            <FormArea>
                                <Input
                                    label='اسم المستخدم'
                                    icon='user'
                                    placeholder='اسم المستخدم'
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                                <Input
                                    label='كلمة المرور'
                                    icon='lock'
                                    placeholder='* * * * * * * *'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}

                                />


                                <Button>
                                    <ButtonText>تسجيل الدخول</ButtonText>
                                </Button>
                            </FormArea>
                    }
                </Formik>

            </Content>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default SharedScreens;