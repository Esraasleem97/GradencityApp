import React from "react";
import { Table, Row, Rows } from 'react-native-table-component';
import {View,StyleSheet} from "react-native";
import {Colors} from "./Styles";
const {secondary,darkLight} = Colors;

export const DataTable = ({tableHead,tableData , ...props}) => {
    return (
            <Table borderStyle={{borderWidth: 1, borderColor: '#eee' , width:'100%'}} style={{marginBottom:15 }} >
                <Row data={tableHead} style={styles.head} textStyle={styles.text} {...props} />
                <Rows data={tableData} textStyle={styles.text} {...props} />
            </Table>
    )
}
const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: secondary },
    text: { margin: 6,textAlign:'center' }
});