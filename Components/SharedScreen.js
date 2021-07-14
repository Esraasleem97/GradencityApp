import React from "react";
import {Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";
import {Keyboard, KeyboardAvoidingView} from "react-native";
import {TouchableWithoutFeedback} from "@ui-kitten/components/devsupport";


const SharedScreens = ({children, onTop, onBottom, onSelectQty, onSelectTakenTime, qty, takeTime}) => {


    return (

        <RefreshHandler>

            <Container>
                <Content>
                    <KeyboardAvoidingView>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <FormArea>
                                {children && onTop ? children : null}
                                <Input

                                    label='الكمية'
                                    icon='form'
                                    placeholder='ادخل الكمية هنا'
                                    keyboardType='number-pad'
                                    value={qty}
                                    onChangeText={onSelectQty}


                                />
                                <Input


                                    label='الوقت المستغرق'
                                    icon='dashboard'
                                    placeholder='00:00:00'
                                    keyboardType='number-pad'
                                    value={takeTime}
                                    onChangeText={onSelectTakenTime}
                                />

                                {children && onBottom ? onBottom : null}

                            </FormArea>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>

                </Content>
            </Container>


        </RefreshHandler>


    )
}

export default SharedScreens;