import React from "react";
import {DataTable} from "./DataTable";
import {
    Button,
    ButtonText,

    Container,
    Content,

    FormArea,
} from "./Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Input from "../Components/Input";


const CheckoutShared = ({
                            children,
                            tableHead,
                            tableData,
                            takeTime,
                            onSelectTakeTime,
                            setTableData,
                            ...props
                        }) => {


    return (
        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children}

                        <DataTable tableHead={tableHead} tableData={tableData} setTableData={setTableData} {...props}/>

                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='numeric'
                            value={takeTime}
                            onChangeText={onSelectTakeTime}
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


export default CheckoutShared;

