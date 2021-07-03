import React, {useState} from "react";
import {
    Container,
    Content,
    HeaderLogin,
    FormArea,
    ForgetPassword,
    Button,
    ButtonText,
    ImageBackground,
    Logo
} from "../Components/Styles";
import {Layout,} from "@ui-kitten/components";
import {Formik} from 'formik';
import {StatusBar} from "expo-status-bar";
import Input from "../Components/Input";
import {TouchableOpacity} from "react-native";
import RefreshHandler from "../Components/RefreshHandler";


const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);


    return (

            <Layout>
                <StatusBar style='light'/>
                <ImageBackground source={require('../assets/bg-plants3.jpg')}>
                    <RefreshHandler>
                    <Container>

                        <HeaderLogin>
                            <Logo source={require('../assets/plants-logo.jpg')}/>
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
                    </RefreshHandler>
                </ImageBackground>
            </Layout>

    );
}

export default Login

