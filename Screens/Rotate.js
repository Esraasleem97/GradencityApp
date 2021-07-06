import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Card, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {View} from "react-native";

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
const Rotate = ({navigation}) => {

    return (
        <Layout>
            <Header title='التدوير' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown items={items} title='البند القديم'/>
                            <Input
                                label='الكمية الموجودة'
                                icon='form'
                                placeholder='ادخل الرقم هنا'
                            />

                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='الكمية'
                            />
                            <Line/>
                            <SelectDropDown items={items} title='البند الجديد'/>
                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='ادخل الرقم هنا'

                            />
                            <FlexStyled >
                                <Input
                                    label='الطول'
                                    icon='form'
                                    placeholder='الطول'
                                />
                                <Input
                                    label='الحجم'
                                    icon='form'
                                    placeholder='الحجم'
                                />
                                <Input
                                    label='القطر'
                                    icon='form'
                                    placeholder='القطر'
                                />

                            </FlexStyled>
                            <Input
                                label='الوقت المستغرق'
                                icon='dashboard'
                                placeholder='00:00:00'
                            />
                            <Button>
                                <ButtonText>حفظ</ButtonText>
                            </Button>
                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}
export default Rotate;