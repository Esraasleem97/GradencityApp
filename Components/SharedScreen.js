import React from "react";
import {Button, ButtonText, Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";
import Message from "./Messages";



const SharedScreens = ({children, onTop, onBottom}) => {

    return (

        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children && onTop  ?  children : null}
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الرقم هنا'
                            keyboardType='numeric'
                        />
                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='numeric'
                        />

                        <Input
                            label='الإنجاز اليومي'
                            icon='form'
                            placeholder='رقم الإنجاز اليومي'

                        />
                        <Input
                            label='الإنجاز الشهري'
                            icon='form'
                            placeholder='رقم الإنجاز الشهري'
                        />
                        {children && onBottom  ?  children : null}


                        <Button>
                            <ButtonText>حفظ</ButtonText>
                        </Button>

                    </FormArea>
                </Content>
            </Container>
        </RefreshHandler>
    )
}

export default SharedScreens;