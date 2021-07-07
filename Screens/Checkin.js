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
import {StyleSheet} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";

const {white, red} = Colors

const {secondary} = Colors;
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
        const newDataTableFields = tableData.filter((rows, i) => i !== id);
        setTableData(newDataTableFields)
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
                            <Table borderStyle={{borderWidth: 1, borderColor: '#eee', width: '100%'}}
                                   style={{marginBottom: 15}}>
                                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={tableData} textStyle={styles.text}/>
                            </Table>
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

const styles = StyleSheet.create({
    head: {height: 40, backgroundColor: secondary},
    text: {margin: 6, textAlign: 'center'}
});

export default Checkin;