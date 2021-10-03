import React from "react";
import {DataTable} from "./DataTable";
import {
    Container,
    Content,
    FormArea,
} from "./Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Input from "../Components/Input";


const Transactions = ({
                          children,
                          tableHead,
                          tableData,
                          takeTime,
                          onSelectTakeTime,
                          setTableData,
                          hasImg = false,
                          other=false ,
                          otherValue ,
                          onSelectOther ,
                          ...props
                      }) => {


    return (
        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children}

                        <DataTable tableHead={tableHead} tableData={tableData} setTableData={setTableData} {...props}
                                   hasImg={hasImg}/>


                        <Input
                            label='الوقت المستغرق بالدقائق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='numeric'
                            value={takeTime}
                            onChangeText={onSelectTakeTime}
                        />

                        {other === true  ? <Input
                            label='أخرى'
                            icon='form'
                            placeholder='أخرى'
                            value={otherValue}
                            onChangeText={onSelectOther}

                        /> : null}
                    </FormArea>
                </Content>
            </Container>
        </RefreshHandler>

    )
}


export default Transactions;

