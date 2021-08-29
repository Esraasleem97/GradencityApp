import React from "react";
import {DataTable} from "./DataTable";
import {
    Container,
    Content,
    FormArea,
} from "./Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Input from "../Components/Input";
import TakePicture from "./Camera";


const Transactions = ({
                          children,
                          tableHead,
                          tableData,
                          takeTime,
                          onSelectTakeTime,
                          setTableData,
                          hasImg = false,
                          onSelectImage,
                          unlinkPickedImage,
                          ...props
                      }) => {


    return (
        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children}
                        {hasImg && <TakePicture onSelectImage={onSelectImage} unlinkPickedImage={unlinkPickedImage}/>}
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

                    </FormArea>
                </Content>
            </Container>
        </RefreshHandler>

    )
}


export default Transactions;

