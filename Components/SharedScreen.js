import React, {useState} from "react";
import {Button, ButtonText, Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";


const SharedScreens = ({children, onTop, onBottom , onSelectQty,onSelectTakenTime}) => {


    const [qty, setQty] = useState(null);

    const [takeTime, seTakenTime] = useState(null);

    const handleQtyOnChange = (value) => {
        onSelectQty(value)
        return setQty(value);
    }

    const handleTakenTimeOnChange = (value) => {
        onSelectTakenTime(value)
        return seTakenTime(value);
    }

    return (

        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children && onTop ? children : null}
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الكمية هنا'
                            keyboardType='numeric'
                            value={qty}
                            onChangeText={handleQtyOnChange}

                        />
                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='numeric'
                            value={takeTime}
                            onChangeText={handleTakenTimeOnChange}

                        />

                        {children && onBottom ? children : null}


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