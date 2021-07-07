import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {DataTable} from "../Components/DataTable";
import {Button, ButtonAdd, ButtonText, Colors, Container, Content, FlexEnd, FormArea} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather} from "@expo/vector-icons";
import Input from "../Components/Input";

const {white} = Colors

const Checkin = ({navigation}) => {
    const tableHead = ['البند', 'الطول', 'حجم العبوة', 'التكلفة'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '45789'],
        ['a', 'b', 'c', 'd']
    ]
    return (
        <Layout>
            <Header title='الإدخال' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown title='المورد' items={items}/>
                            <SelectDropDown title='المستودع' items={items}/>
                            <FlexEnd>
                                <ButtonAdd>
                                    <Feather name='plus' size={15} color={white}/>
                                    <ButtonText>إضافة</ButtonText>
                                </ButtonAdd>
                            </FlexEnd>
                            <DataTable tableHead={tableHead} tableData={tableData}/>
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

export default Checkin;