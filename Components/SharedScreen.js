import React from "react";
import {Button, ButtonText, Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import {Formik} from "formik";


const SharedScreens = () => {


    const submitHandler = (values) => {
        console.log(values)
    }

    return (
        <Container>
            <Content>
                <Formik
                    initialValues={{
                        clause: '',
                        quantity: '',
                        time: '',
                        daily_achievement: '',
                        monthly_achievement: ''
                    }}
                    onSubmit={submitHandler}

                >
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) =>
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

                                <Button type='submit' onPress={handleSubmit}>
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