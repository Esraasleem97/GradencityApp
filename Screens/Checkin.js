import React, {useState} from "react";
import {Layout, Button as ButtonUI} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";

import {DataTable} from "../Components/DataTable";
import {
    Button,
    ButtonText,
    ButtonAdd,
    Colors,
    Container,
    Content,
    FlexEnd,
    FormArea,
    FlexRow
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather, FontAwesome} from "@expo/vector-icons";
import Input from "../Components/Input";

import {Modals} from "../Components/Modals";
import {StyleSheet} from "react-native";

const {white, red} = Colors


const Checkin = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);

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
        setTableData([...tableData, tableData.splice(id, 1)[1]])
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

                                <ButtonAdd onPress={() => setVisible(true)}>
                                    <Feather name='plus' size={15} color={white}/>
                                    <ButtonText>إضافة</ButtonText>
                                </ButtonAdd>
                            </FlexEnd>

                            <DataTable tableHead={tableHead} tableData={tableData}/>
                            <Input
                                label='الوقت المستغرق'
                                icon='dashboard'
                                placeholder='00:00:00'
                                keyboardType='numeric'
                            />
                            <Button>
                                <ButtonText>حفظ</ButtonText>
                            </Button>
                        </FormArea>
                        <Modals
                            visible={visible}
                            setVisible={setVisible}>
                            <SelectDropDown title='البند' items={items}/>
                            <Input
                                label='الطول'
                                icon='form'
                                placeholder='الطول'
                                keyboardType='numeric'
                            />
                            <Input
                                label='الحجم'
                                icon='form'
                                placeholder='الحجم'
                                keyboardType='numeric'
                            />
                            <Input
                                label='التكلفة'
                                icon='form'
                                placeholder='التكلفة'
                                keyboardType='numeric'
                            />
                            <FlexRow>
                                <ButtonUI onPress={() => setVisible(false)} status='success' style={styles.button}>
                                    حفظ
                                </ButtonUI>
                                <ButtonUI onPress={() => setVisible(false)} status='basic' style={styles.button}>
                                    إلغاء
                                </ButtonUI>
                            </FlexRow>
                        </Modals>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}


export default Checkin;

const styles = StyleSheet.create({
    button: {
        margin: 2,
    },
});
