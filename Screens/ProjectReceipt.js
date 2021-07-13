import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import {
    Colors
} from "../Components/Styles";
import {FontAwesome} from "@expo/vector-icons";
import CheckoutShared from "../Components/CheckoutShared";
const {red} = Colors
const ProjectsReceipt = ({navigation}) => {
    const tableHead = ['البند', 'الكمية', 'الاجراء'];

    const [tableData, setTableData] = useState([
        ['1', '2', <FontAwesome onPress={() => removeRow(0)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['2', 'b', <FontAwesome onPress={() => removeRow(1)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['3', '2', <FontAwesome onPress={() => removeRow(2)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['4', 'b', <FontAwesome onPress={() => removeRow(3)} name='times' color={red} style={{textAlign: 'center'}}/>]
    ]);


    const removeRow = (id) => {
        setTableData([...tableData, tableData.splice(id, 1)[1]])
    };


    return (
        <Layout>
            <Header title='إستلام المشاريع' navigation={navigation}/>
            <CheckoutShared tableHead={tableHead} tableData={tableData}/>
        </Layout>
    )
}


export default ProjectsReceipt;

