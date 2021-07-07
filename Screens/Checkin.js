import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {DataTable} from "../Components/DataTable";
import {Button, ButtonAdd, ButtonText, Colors, Container, Content, FlexEnd, FormArea} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather,FontAwesome} from "@expo/vector-icons";
import Input from "../Components/Input";

const {white,red} = Colors

const Checkin = ({navigation}) => {
    const tableHead = ['البند', 'الطول', 'حجم العبوة', 'التكلفة',''];
    const [tableData ,setTableData] = useState( [
        ['البندالبندالبندالالالالالالا', '2', '3', '4',<FontAwesome onPress={()=>alert('1')} name='times' color={red} style={{textAlign:'center'}}/>],
        ['a', 'b', 'c', 'd',<FontAwesome onPress={()=>alert('2')} name='times' color={red} style={{textAlign:'center'}}/>],
        ['1', '2', '3', '45789',<FontAwesome onPress={()=>alert('3')} name='times' color={red} style={{textAlign:'center'}}/>],
        ['a', 'b', 'c', 'd',<FontAwesome onPress={()=>alert('4')} name='times' color={red} style={{textAlign:'center'}}/>]
    ])
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
                            <DataTable tableHead={tableHead} tableData={tableData}   />
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