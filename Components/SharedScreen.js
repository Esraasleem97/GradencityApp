import React from "react";
import {Button, ButtonText, Container, Content, FormArea, Label} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";
import SelectDropDown from "./SelectDropDown";



const SharedScreens = () => {

    return (
         <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        <Label>البند</Label>
                        <SelectDropDown/>
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الرقم هنا'
                        />
                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'
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