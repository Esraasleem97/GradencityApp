import React, {useState} from "react";
import {
    Container,
    Content,
    HeaderLogin,
    HeaderShape,
    FormArea,
    Title,
    ForgetPassword,
    Button, ButtonText, ImageBackground, Shadow
} from "../Components/Styles";
import {Layout,} from "@ui-kitten/components";
import {Formik} from 'formik';
import {StatusBar} from "expo-status-bar";
import Input from "../Components/Input";
import {ScrollView, TouchableOpacity} from "react-native";


const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);


    return (
        <Layout>
            <StatusBar style='light'/>
            <ImageBackground source={require('../assets/plants.jpg')}>
                <ScrollView>
                    <Container>

                        <HeaderLogin>

                            <Shadow>
                                <HeaderShape>
                                    <Title>تسجيل الدخول</Title>
                                </HeaderShape>
                            </Shadow>

                        </HeaderLogin>

                        <Content>
                            <Formik
                                initialValues={{username: '', password: ''}}
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
                                                secureTextEntry={hidePassword}
                                                isPassword={true}
                                                hidePassword={hidePassword}
                                                setHidePassword={setHidePassword}
                                            />

                                            <TouchableOpacity>
                                                <ForgetPassword>هل نسيت كلمة المرور؟</ForgetPassword>
                                            </TouchableOpacity>

                                            <Button onPress={() => navigation.navigate('Home')}>
                                                <ButtonText>تسجيل الدخول</ButtonText>
                                            </Button>
                                        </FormArea>
                                }
                            </Formik>
                        </Content>
                    </Container>
                </ScrollView>
            </ImageBackground>
        </Layout>


    );
}

export default Login

