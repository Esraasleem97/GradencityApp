import React, {useState} from "react";
import {
    Container,
    Content,
    HeaderLogin,
    FormArea,
    ForgetPassword,
    Button,
    ButtonText,

    Logo
} from "../Components/Styles";
import {Layout, Spinner,} from "@ui-kitten/components";
import {StatusBar} from "expo-status-bar";
import Input from "../Components/Input";
import {TouchableOpacity, View} from "react-native";
import RefreshHandler from "../Components/RefreshHandler";
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
        dispatch(userLoginHandler(Number(username) , Number(password) ))
    }

    return (

        <Layout>
            <StatusBar style='light'/>
            <Header title='تسجيل الدخول'/>
            <RefreshHandler>
                <Container>

                    <HeaderLogin>
                        <Logo  source={require('../assets/icon.png')}/>
                    </HeaderLogin>

                    <Content>
                        <FormArea>

                            <Input
                                label='اسم المستخدم'
                                icon='user'
                                placeholder='اسم المستخدم'
                                onChangeText={(value) => setUsername(value)}
                                value={username}
                            />
                            <Messages error={error && error.username}/>
                            <Input
                                label='كلمة المرور'
                                icon='lock'
                                placeholder='* * * * * * * *'
                                onChangeText={(value) => setPassword(value)}
                                value={password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <Messages error={error && error.password}/>

                            <TouchableOpacity>
                                <ForgetPassword>هل نسيت كلمة المرور؟</ForgetPassword>
                            </TouchableOpacity>
                            <View style={{alignSelf: 'center' , marginTop:10,width:'100%' }}>
                                {
                                    loading
                                        ? <Spinner status='success' size='giant'/>
                                        : <Button onPress={SubmitHandler}>
                                            <ButtonText>تسجيل الدخول</ButtonText>
                                        </Button>
                                }
                            </View>
                        </FormArea>

                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>

    );
}

export default Login

