import React from "react";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {StyleSheet} from "react-native";
import {Colors} from "./Styles";
import {FontAwesome} from "@expo/vector-icons";

const {secondary} = Colors;
const {red} = Colors
export const DataTable = ({tableHead, tableData, setTableData, ...props}) => {


    const removeIndex = async (index) => {
        await setTableData(tableData.filter((item, i) => i !== index))
    }

    const element = (data, index) => (
        <FontAwesome onPress={() => removeIndex(index)} name='times' color={red} style={{textAlign: 'center'}}/>
    );


    return (
        <Table borderStyle={{borderWidth: 1, borderColor: '#eee', width: '100%'}}
               style={{marginBottom: 15}} {...props} >
            <Row data={tableHead} style={styles.head} textStyle={styles.text} {...props} />

            {
                tableData.map((item, index) => {

                    return (
                        <TableWrapper style={[styles.wrapper, styles.row]} key={`item_${index}`}>
                            {
                                item.map((cellData, cellIndex) =>
                                    <Cell key={`cell_${cellIndex}`}
                                          data={cellIndex === 3 ? element(cellData, index) : cellData}
                                          textStyle={styles.text}/>
                                )
                            }
                        </TableWrapper>
                    )
                })
            }

        </Table>
    )
}


const styles = StyleSheet.create({
    row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
    head: {height: 40, backgroundColor: secondary},
    text: {margin: 6, textAlign: 'center'},
    btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
    btnText: {textAlign: 'center', color: '#fff'}

});