import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import {items} from "../DummyData";
import Input from "../Components/Input";

const Profile = ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <Layout>
            <Header title='حسابي' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <Input
                                label='اسم المستخدم'
                                icon='user'
                                placeholder='الاسم'
                            />

                            <Input
                                label='البريد الإلكتروني'
                                icon='mail'
                                placeholder='example@example.com'
                            />
                            <Input
                                label='رقم الهاتف'
                                icon='phone'
                                placeholder='(+962) 78 0000 00'

                            />
                            <Line/>
                            <SelectDropDown items={items} title='المدينة'/>
                            <SelectDropDown items={items} title='المنطقة'/>
                            <Input
                                label='العنوان'
                                icon='form'
                                placeholder='ادخل العنوان هنا'

                            />
                            <Line/>
                            <Input
                                label='كلمة المرور'
                                icon='lock'
                                placeholder='* * * * * * * *'
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <Input
                                label='تأكيد كلمة المرور'
                                icon='lock'
                                placeholder='* * * * * * * *'
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <Button>
                                <ButtonText>تعديل</ButtonText>
                            </Button>
                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}

export default Profile;