import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import {Button, ButtonAdd, ButtonText, Colors, Container, Content, FlexEnd, FormArea} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather, FontAwesome} from "@expo/vector-icons";
import Input from "../Components/Input";
import {DataTable} from "../Components/DataTable";

const {white, red} = Colors

const ArrayOfTableData = [];
const Checkin = ({navigation}) => {

    const tableHead = ['البند', 'الطول', 'حجم العبوة', 'التكلفة', 'الاجراء'];

    const [tableData, setTableData] = useState([]);

    const removeRow = (id) => {
        return setTableData(tableData.filter((row, i) => i !== id))
    };


    const AddNewRow = async () => {
        await ArrayOfTableData.push((['4', 'b', 'c', 'd']))


        console.log(ArrayOfTableData)

        const fixed = await tableData.push(ArrayOfTableData)
        setTableData(fixed)
    }


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
                                <ButtonAdd onPress={AddNewRow}>
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