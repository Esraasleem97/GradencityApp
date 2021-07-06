import React from "react";
import {Button, ButtonText, Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";
import SelectDropDown from "./SelectDropDown";
import {ScrollView} from "react-native";

const items = [
    {id: 1, name: 'بند 1'},
    {id: 2, name: 'بند 2'},
    {id: 3, name: 'بند 3'},
    {id: 4, name: 'بند 4'},
    {id: 5, name: 'بند 5'},
    {id: 6, name: 'بند 6'},
    {id: 7, name: 'بند 7'},
    {id: 8, name: 'بند 8'},
    {id: 9, name: 'بند 9'},
    {id: 10, name: 'بند 10'},
    {id: 11, name: 'بند 11'},
    {id: 12, name: 'بند 12'},
    {id: 13, name: 'بند 13'},
    {id: 14, name: 'بند 14'},
];


const SharedScreens = () => {

    return (

         <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>

                        <SelectDropDown items={items}/>
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