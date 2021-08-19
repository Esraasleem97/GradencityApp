import React, {useCallback, useEffect, useState} from 'react';
import {DrawerActions, useFocusEffect} from '@react-navigation/native'
import {Layout, Spinner} from "@ui-kitten/components";

import {
    Container,
    Grid,
    ImageBackground,
    Card,
    CardImage,
    CardText,
    ContainerAddIcon,
    AddIcon, StatusBarHeight
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Header from "../Components/Header";

import {productsListHandler} from "../Redux/Actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import {projectsListHandler} from "../Redux/Actions/projectActions";
import {stocksListHandler} from "../Redux/Actions/stockActions";

import {Dimensions, View} from "react-native";
import {Text} from "@ui-kitten/components";
import {MyTransactionsHandler} from "../Redux/Actions/transactionActions";
import {AntDesign} from "@expo/vector-icons";


const Home = ({navigation}) => {

    const [refresh, setRefresh] = useState(false)

    const [loading, setLoading] = useState(false)

    const {productsList, projectsList, stocksList, myTransactions} = useSelector(state => state);

    const {products, productLoading, newProductCreated} = productsList

    const {projects, newProjectCreated} = projectsList

    const {stocks} = stocksList

    const {myTransactionsList} = myTransactions

    const dispatch = useDispatch()

    const handlePullToRefresh = () => {
        return setRefresh(true)
    }


    useEffect(() => {
        setLoading(true)
        if (refresh) {
            setRefresh(!refresh)
        }

        dispatch(stocksListHandler())
        dispatch(projectsListHandler())
        dispatch(MyTransactionsHandler())
        dispatch(productsListHandler())

        setTimeout(() => setLoading(false), 3000)

    }, [dispatch, refresh])

    useFocusEffect(
        useCallback(() => {
            dispatch(MyTransactionsHandler())

            if (newProductCreated) {
                dispatch(productsListHandler())
            }

            if (newProjectCreated) {
                dispatch(projectsListHandler())
            }


        }, [dispatch, newProductCreated, newProjectCreated])
    )

    const data = [
        {
            id: 0, title: 'إستلام من المشاريع',
            img: require('../assets/recipition.png'),
            nav: 'ProjectsReceipt',
            data: {projects, stocks, products}
        },
        {
            id: 1,
            title: 'الإخراج',
            img: require('../assets/checkout.png'),
            nav: 'Checkout',
            data: {projects, stocks, products}
        },
          {id: 8, title: 'الإنجازات', img: require('../assets/ach.png'), nav: 'Achievement', data: {projects, products}},
        {id: 2, title: 'زراعة البذور', img: require('../assets/seeding.png'), nav: 'Seed', data: {products}},
        {id: 3, title: 'التعقيل', img: require('../assets/taq.png'), nav: 'Taeqil', data: {products}},
        {id: 4, title: 'التعشيب', img: require('../assets/ta3sheeb.png'), nav: 'Weed', data: {products}},
        {id: 5, title: 'تقليم أو نقل', img: require('../assets/transform.png'), nav: 'TrimMove', data: {products}},
        {
            id: 6,
            title: 'التدوير',
            img: require('../assets/rotate.png'),
            nav: 'Rotate',
            data: {products, stocks}
        },
        {
            id: 7,
            title: 'النقل بين المشاتل',
            img: require('../assets/plant.png'),
            nav: 'Transfer',
            data: {stocks, products}
        },
    ]

    const heightScreen = Dimensions.get('window').height;
    return (
        <Layout  style={{height:heightScreen + 90}}>
            <ImageBackground source={require('../assets/bg-plants6.jpg')} resizeMode='cover'>
                <Header title='الصفحة الرئيسية'/>
                <RefreshHandler pullToRefresh={handlePullToRefresh}>
                    <Container >

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '90%',
                            marginBottom: 20
                        }}>
                            <Text>الإنجاز اليومي : <Text style={{color: '#16890a'}}>
                                {
                                    myTransactionsList && myTransactionsList.today_total_achievements || '00:00'
                                }
                            </Text>
                            </Text>
                            <Text>الإنجاز الشهري : <Text style={{color: '#16890a'}}>
                                {
                                    myTransactionsList && myTransactionsList.monthly_total_achievements || '00:00'
                                }
                            </Text>
                            </Text>
                        </View>
                        <Grid style={{marginBottom:StatusBarHeight+80}}>

                            {!productLoading && !loading ?
                                data.map((item) => {
                                    return (
                                        <Card key={item.id}
                                              onPress={() => navigation.navigate(`${item.nav}`, item)}
                                        >
                                            <CardImage resizeMode='contain' source={item.img}/>
                                            <CardText>{item.title}</CardText>
                                        </Card>
                                    )
                                })
                                : <Spinner size='large' status='success'/>
                            }
                        </Grid>


                    </Container>


            </RefreshHandler>

                {
                    !productLoading && !loading ?
                        <ContainerAddIcon >
                            <AddIcon onPress={() => {
                                navigation.dispatch(DrawerActions.openDrawer())
                            }}>
                                <AntDesign name='plus' color='#fff' size={20}/>
                            </AddIcon>
                        </ContainerAddIcon>
                        : null
                }

            </ImageBackground>
        </Layout>

    );

}


export default Home;