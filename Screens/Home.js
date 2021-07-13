import React, {useEffect} from 'react';
import {Layout, Spinner} from "@ui-kitten/components";

import {
    Container,
    Grid,
    ImageBackground,
    Card,
    CardImage,
    CardText
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Header from "../Components/Header";

import {productsListHandler} from "../Redux/Actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import {projectsListHandler} from "../Redux/Actions/projectActions";
import {stocksListHandler} from "../Redux/Actions/stockActions";

import {View} from "react-native";
import {Text} from "@ui-kitten/components";


const Home = ({navigation}) => {

    const {productsList, projectsList, stocksList} = useSelector(state => state);

    const {products, productLoading} = productsList

    const {projects, projectLoading} = projectsList

    const {stocks, stockLoading} = stocksList

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(productsListHandler())
        dispatch(stocksListHandler())
        dispatch(projectsListHandler())

    }, [dispatch])

    const data = [
        {
            id: 0, title: 'إستلام من المشاريع',
            img: require('../assets/checkout.png'),
            nav: 'ProjectsReceipt',
            data: {projects, stocks}
        },
        {id: 1, title: 'الإخراج', img: require('../assets/checkout.png'), nav: 'Checkout', data: {projects, stocks}},
        {id: 2, title: 'الإنجازات', img: require('../assets/ach.png'), nav: 'Achievement', data: {projects, products}},
        {id: 3, title: 'زراعة البذور', img: require('../assets/seeding.png'), nav: 'Seed', data: {products}},
        {id: 4, title: 'التعقيل', img: require('../assets/taq.png'), nav: 'Taeqil', data: {products}},
        {id: 5, title: 'التعشيب', img: require('../assets/ta3sheeb.png'), nav: 'Weed', data: {products}},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/transform.png'), nav: 'TrimMove', data: {products}},
        {id: 7, title: 'التدوير', img: require('../assets/rotate.png'), nav: 'Rotate', data: {products}},
        {
            id: 8,
            title: 'النقل بين المشاتل',
            img: require('../assets/plant.png'),
            nav: 'Transfer',
            data: {stocks, products}
        },
    ]

    return (
        <Layout>
            <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                <Header title='الصفحة الرئيسية'/>
                <RefreshHandler>
                    <Container>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '90%',
                            marginBottom: 20
                        }}>
                            <Text>الإنجاز اليومي : 00</Text>
                            <Text>الإنجاز الشهري : 00</Text>
                        </View>
                        <Grid>

                            {!productLoading && !projectLoading && !stockLoading
                                ? data.map((item) => {
                                    return (
                                        <Card key={item.id} onPress={() => {
                                            navigation.navigate(`${item.nav}`, item)
                                        }}>
                                            <CardImage resizeMode='contain' source={item.img}/>
                                            <CardText >{item.title}</CardText>
                                        </Card>
                                    )
                                })
                                : <Spinner size='large' status='success'/>
                            }
                        </Grid>
                    </Container>
                </RefreshHandler>
            </ImageBackground>
        </Layout>

    );

}


export default Home;