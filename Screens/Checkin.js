import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {DataTable} from "../Components/DataTable";
import {Button, ButtonAdd, ButtonText, Colors, Container, Content, FlexEnd, FormArea} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather, FontAwesome} from "@expo/vector-icons";
import Input from "../Components/Input";

const {white, red} = Colors

const Checkin = ({navigation}) => {


    const tableHead = ['البند', 'الطول', 'حجم العبوة', 'التكلفة', 'الاجراء'];
    const [tableData, setTableData] = useState([
        ['1', '2', '3', '4',
            <FontAwesome onPress={() => removeRow(0)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['2', 'b', 'c', 'd',
            <FontAwesome onPress={() => removeRow(1)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['3', '2', '3', '45789',
            <FontAwesome onPress={() => removeRow(2)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['4', 'b', 'c', 'd',
            <FontAwesome onPress={() => removeRow(3)} name='times' color={red} style={{textAlign: 'center'}}/>]
    ]);


    const removeRow = (id) => {
        // const newDataTableFields = tableData.filter((rows, i) => i !== id);
        // return setTableData(newDataTableFields)

        setTableData([...tableData,tableData.splice(id,1)])
    };



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