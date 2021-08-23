import React, {useState} from "react";
import {
    Container,
    Content,
    HeaderLogin,
    FormArea,
    Button,
    ButtonText,
    Logo
} from "../Components/Styles";
import {Layout, Spinner} from "@ui-kitten/components";
import {StatusBar} from "expo-status-bar";
import Input from "../Components/Input";
import {

    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import Header from "../Components/Header";
import {useDispatch, useSelector} from "react-redux";
import {userLoginHandler} from "../Redux/Actions/userActions";
import Messages from "../Components/Messages";



const Login = () => {

    const [username, setUsername] = useState(null);

    const [password, setPassword] = useState(null);

    const [hidePassword, setHidePassword] = useState(true);

    const dispatch = useDispatch();

    const {userLogin} = useSelector(state => state);

    const {loading, error} = userLogin

    const SubmitHandler = () => {
        dispatch(userLoginHandler(username, password))
    }

    return (

        <Layout>
            <StatusBar style='light'/>


            <Header title='تسجيل الدخول'/>


            <KeyboardAvoidingView  keyboardVerticalOffset={25}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView style={{height:'100%',width:'100%'}}>
                        <Container>
                            <HeaderLogin>
                                <Logo source={require('../assets/icon.png') }  resizeMode='center' />
                            </HeaderLogin>
                            <Content>
                                <FormArea>
                                    <Messages error={error && error.username}/>
                                    <Input
                                        label='اسم المستخدم'
                                        icon='user'
                                        placeholder='اسم المستخدم'
                                        onChangeText={(value) => setUsername(value)}
                                        value={username}
                                    />

                                    <Messages error={error && error.password}/>
                                    <Input
                                        label='كلمة المرور'
                                        icon='lock'
                                        placeholder=' * * * * * * * * '
                                        onChangeText={(value) => setPassword(value)}
                                        value={password}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <TouchableOpacity>
                                        {/*<ForgetPassword>هل نسيت كلمة المرور؟</ForgetPassword>*/}

                                    </TouchableOpacity>

                                    <View style={{justifyContent: 'center', marginTop: 10, width: '100%'}}>
                                        {
                                            loading
                                                ?
                                                <ButtonText>
                                                    <Spinner status='success' size='giant'
                                                             style={{alignSelf: 'center'}}/>
                                                </ButtonText>
                                                : <Button onPress={SubmitHandler}>

                                                    <ButtonText>تسجيل الدخول</ButtonText>
                                                </Button>
                                        }
                                    </View>
                                </FormArea>
                            </Content>

                        </Container>
                </ScrollView>
                </KeyboardAvoidingView>


        </Layout>


    );
}

export default Login

