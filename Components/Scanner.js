import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Layout} from "@ui-kitten/components";
import Header from "./Header";

export default function Scanner({navigation, route}) {

    const {params: {products, handleOnSelectScannedProduct}} = route

    const [hasPermission, setHasPermission] = useState(null);

    const [scanned, setScanned] = useState(false);

    const [BarCode, setBarCode] = useState(null);


    useEffect(() => {


        (async () => {

            const {status} = await BarCodeScanner.requestPermissionsAsync();

            setHasPermission(status === 'granted');

        })();

    }, []);

    const handleBarCodeScanned = async ({data}) => {

        setScanned(true);

        await products.filter(item => {
            return data === item.code && setBarCode(item)
        })
        console.log(BarCode)

    };

    if (hasPermission === null) {

        return <Text>السماح للتطبيق للوصول الى الكاميرا</Text>;

    }
    if (hasPermission === false) {

        return <Text>لم يتم اعطاء صلاحية للتطبيق للوصول الى كاميرة الهاتف </Text>;

    }

    return (
        <Layout>
            <Header title='بحث عن البنود' navigation={navigation} backNavigation={true}/>
            <View style={styles.container}>


                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />

                {!scanned
                    ? <Text style={{alignSelf: 'center', color: '#06278e', marginHorizontal: 100}}>
                        يرجى المسح على
                        الباركود </Text>
                    : null
                    // <Text style={{color: '#06278e', marginHorizontal: 100}}> تم المسح بنجاح </Text>
                }


                {scanned && <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                    <Text style={styles.text}>مسح الكود مرة أخرى</Text>
                </TouchableOpacity>}

                {scanned && <TouchableOpacity style={styles.button}
                                              onPress={() => {
                                                  navigation.goBack()
                                                  handleOnSelectScannedProduct(BarCode)
                                              }}>
                    <Text style={styles.text}>
                        حفظ و رجوع
                    </Text>
                </TouchableOpacity>
                }

            </View>
        </Layout>


    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: 80
    },
    button: {
        paddingHorizontal: 30,
        paddingBottom: 20,
        backgroundColor: '#34343400',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#06278e'
    }
});



