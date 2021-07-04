import React from "react";
import {Button, ButtonText, Container, Content, ForgetPassword, FormArea, Label} from "./Styles";
import Input from "./Input";
import {Formik} from "formik";
import {IndexPath, Select, SelectItem} from "@ui-kitten/components";
import RefreshHandler from "./RefreshHandler";

const data = [
    'البند 1',
    'البند 2',
    'البند 3',
];
const SharedScreens = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const displayValue = data[selectedIndex.row];
    const renderOption = (title) => (
        <SelectItem title={title}/>
    );
    return (
            <RefreshHandler >
                <Container>

                    <Content>

                        <Formik
                            initialValues={{
                                clause: '',
                                quantity: '',
                                time: '',
                                daily_achievement: '',
                                monthly_achievement: ''
                            }}
                            onSubmit={(value) => console.log(value)}>
                            {
                                ({handleChange, handleBlur, values}) =>
                                    <FormArea>
                                        <Label>البند</Label>
                                        <Select
                                            style={{alignSelf:'center',width:'100%',textAlign:'right'}}
                                            size='large'
                                            placeholder='البند'
                                            value={displayValue}
                                            selectedIndex={selectedIndex}
                                            onSelect={(index) => setSelectedIndex(index)}>
                                            {data.map(renderOption)}
                                        </Select>
                                        <Input
                                            label='الكمية'
                                            icon='form'
                                            placeholder='ادخل الرقم هنا'
                                            onChangeText={handleChange('quantity')}
                                            onBlur={handleBlur('quantity')}
                                            value={values.quantity}
                                        />
                                        <Input
                                            label='الوقت المستغرق'
                                            icon='dashboard'
                                            placeholder='00:00:00'
                                            onChangeText={handleChange('time')}
                                            onBlur={handleBlur('time')}
                                            value={values.time}

                                        />
                                        <Input
                                            label='الإنجاز اليومي'
                                            icon='form'
                                            placeholder='رقم الإنجاز اليومي'
                                            onChangeText={handleChange('daily_achievement')}
                                            onBlur={handleBlur('daily_achievement')}
                                            value={values.daily_achievement}

                                        />
                                        <Input
                                            label='الإنجاز الشهري'
                                            icon='form'
                                            placeholder='رقم الإنجاز الشهري'
                                            onChangeText={handleChange('monthly_achievement')}
                                            onBlur={handleBlur('monthly_achievement')}
                                            value={values.monthly_achievement}

                                        />


                                        <Button>
                                            <ButtonText>حفظ</ButtonText>
                                        </Button>
                                    </FormArea>
                            }
                        </Formik>

                    </Content>

                </Container>
            </RefreshHandler>



    )
}

export default SharedScreens;