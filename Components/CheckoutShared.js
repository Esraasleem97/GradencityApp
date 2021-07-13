import React, {useState} from "react";
import {Button as ButtonUI} from "@ui-kitten/components";
import SelectDropDown from "../Components/SelectDropDown";
import {DataTable} from "./DataTable";
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
} from "./Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather} from "@expo/vector-icons";
import Input from "../Components/Input";
import {Modals} from "./Modals";
import {StyleSheet} from "react-native";
const {white} = Colors

const CheckoutShared = ({tableHead,tableData}) => {
    const [visible, setVisible] = useState(false);

    return (
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown title='أسم المشروع' items={items}/>
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
                            setVisible={setVisible}
                        >
                            <SelectDropDown title='البند' items={items}/>
                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='الكمية'
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

    )
}


export default CheckoutShared;

const styles = StyleSheet.create({
    button: {
        margin: 2,
    },
});
