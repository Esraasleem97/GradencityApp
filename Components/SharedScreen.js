import React from "react";
import {Button, ButtonText, Container, Content, ForgetPassword, FormArea} from "./Styles";
import Input from "./Input";
import {Formik,Field} from "formik";
import {KeyboardAvoidingView} from "react-native";
import {IndexPath, Select, SelectItem} from "@ui-kitten/components";

const SharedScreens = () =>{
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    return(
        <Container>

            <Content>

                <Formik
                    initialValues={{clause: '', quantity: '',time:'',daily_achievement:'',monthly_achievement:''}}
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
                                    <ButtonText>حفظ</ButtonText>
                                </Button>
                            </FormArea>
                    }
                </Formik>

            </Content>

        </Container>
    )
}

export default SharedScreens;