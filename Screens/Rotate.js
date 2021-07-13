import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {items} from "../DummyData";



const Rotate = ({navigation , route}) => {

    const { params: { data: { products } } } = route


    return (
        <Layout>
            <Header title='التدوير' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown items={products} title='البند القديم' style={{fontSize:20}}/>
                            <Input
                                label='الكمية الموجودة'
                                icon='form'
                                placeholder='ادخل الرقم هنا'
                                keyboardType='numeric'
                            />

                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='الكمية'
                                keyboardType='numeric'
                            />
                            <Line/>
                            <SelectDropDown items={items} title='البند الجديد' style={{fontSize:20}}/>
                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='ادخل الكمية هنا'
                                keyboardType='numeric'

                            />
                            <FlexStyled>
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
                                    label='القطر'
                                    icon='form'
                                    placeholder='القطر'
                                    keyboardType='numeric'
                                />

                                <Input
                                    label='الوقت المستغرق'
                                    icon='dashboard'
                                    placeholder='00:00'
                                    keyboardType='numeric'
                                />

                            </FlexStyled>

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