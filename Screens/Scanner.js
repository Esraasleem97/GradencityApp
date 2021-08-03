import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, LogBox} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Header from "../Components/Header";
import {Button, ButtonText, Container, FlexStyled, height, StatusBarHeight, width} from "../Components/Styles";

export default function Scanner({navigation, route}) {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);


    const {params: {products, handler}} = route

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
        try {
            setScanned(true);

            await products.filter(item => {
                return data === item.code && setBarCode(item)
            })

        } catch (e) {
            setBarCode(null)
            console.log(e)
        }

    };

    if (hasPermission === null) {

        return <Text>السماح للتطبيق للوصول الى الكاميرا</Text>;

    }
    if (hasPermission === false) {

        return <Text>لم يتم اعطاء صلاحية للتطبيق للوصول الى كاميرة الهاتف </Text>;

    }

    return (
        <View>
            <Header title='بحث عن البنود' navigation={navigation} backNavigation={true}/>
            <Container>
                <View style={styles.barCodeContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={[StyleSheet.absoluteFillObject, styles.barCode]}
                    />
                </View>
                {!scanned
                    ? <Text style={{flex:1,alignItems: 'center', color: '#06278e'}}>
                        يرجى المسح على
                        الباركود </Text>
                    : null
                }

                <FlexStyled>
                    {scanned && <Button onPress={() => setScanned(false)}>
                        <ButtonText>مسح الكود مرة أخرى</ButtonText>
                    </Button>}

                    {scanned && <Button
                        onPress={() => {
                            handler(BarCode)
                            navigation.goBack()

                        }}>
                        <ButtonText>حفظ و رجوع</ButtonText>
                    </Button>
                    }
                </FlexStyled>

            </Container>
        </View>


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
    },
    barCodeContainer :{
        flex:1,
        width:width-10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',

    },
    barCode : {
        height:height-50,
        marginVertical:StatusBarHeight-80
    }
});



