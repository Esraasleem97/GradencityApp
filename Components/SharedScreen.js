import React, {useState} from "react";
import {Button, ButtonText, Container, Content, FormArea, Label} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";

import Select from 'react-select';


const SharedScreens = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    const handleChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <RefreshHandler>
            <Container>

                <Content>

                    <FormArea>
                        <Label>البند</Label>
                        <Select
                            value=''
                            onChange={handleChange}
                            options={options}
                        />
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الرقم هنا'

                        />
                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'

                        />
                        <Input
                            label='الإنجاز اليومي'
                            icon='form'
                            placeholder='رقم الإنجاز اليومي'

                        />
                        <Input
                            label='الإنجاز الشهري'
                            icon='form'
                            placeholder='رقم الإنجاز الشهري'


                        />


                        <Button>
                            <ButtonText>حفظ</ButtonText>
                        </Button>
                    </FormArea>

                </Content>

            </Container>
        </RefreshHandler>


    )
}

export default SharedScreens;