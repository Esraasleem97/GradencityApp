import React from "react";
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {Image, StyleSheet, View} from "react-native";
import {Colors} from "./Styles";
import {FontAwesome} from "@expo/vector-icons";

const {secondary} = Colors;
const {red} = Colors
export const DataTable = ({tableHead, tableData, setTableData, hasImg, ...props}) => {


    const removeIndex = async (index) => {
        await setTableData(tableData.filter((item, i) => i !== index))
    }

    const element = (data, index) => (
        <FontAwesome onPress={() => removeIndex(index)} name='times' color={red} style={{textAlign: 'center'}}/>
    );

    const image = (data) => (
        <View style={styles.imageContainer}>
            {
                data !== '' && <Image
                    source={{uri: data.uri}}
                    style={styles.image}
                />
            }
        </View>
    );

    return (
        <Table borderStyle={{borderWidth: 1, borderColor: '#eee', width: '100%'}}
               style={{marginBottom: 15}} {...props} >
            <Row data={tableHead} style={styles.head} textStyle={styles.text} {...props} />

            {

                tableData.map((item, index) => {
                    return hasImg ? (
                            <TableWrapper style={[styles.wrapper, styles.row]} key={`item_${index}`}>
                                {
                                    item.map((cellData, cellIndex) => {

                                            if (cellIndex === 2) {
                                                return (<Cell key={`cell_${cellIndex}`}
                                                              data={image(cellData, index)}
                                                              textStyle={styles.text}/>)
                                            } else {
                                                return (<Cell key={`cell_${cellIndex}`}
                                                              data={cellIndex === 7 ? element(cellData, index) : cellData}
                                                              textStyle={styles.text}/>)
                                            }

                                        }
                                    )
                                }
                            </TableWrapper>
                        ) :
                        (
                            <TableWrapper style={[styles.wrapper, styles.row]} key={`item_${index}`}>
                                {
                                    item.map((cellData, cellIndex) =>
                                        <Cell key={`cell_${cellIndex}`}
                                              data={cellIndex === 6 ? element(cellData, index) : cellData}
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
    text: {margin: 2, textAlign: 'center',fontSize:10},
    btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
    btnText: {textAlign: 'center', color: '#fff'},


    screen: {},

    imageContainer: {
        padding: 15,
        alignSelf: 'center'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 20 ,
        resizeMode: 'cover'
    }
});