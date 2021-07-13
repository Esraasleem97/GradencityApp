import React, {useEffect, useState} from 'react';
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




const Home = ({navigation}) => {



    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsListHandler())
        dispatch(projectsListHandler())
        dispatch(stocksListHandler())
    }, [])

    const {productsList} = useSelector(state => state);

    const {products, productLoading} = productsList

    const {projectsList} = useSelector(state => state);

    const {projects, projectLoading} = projectsList

    const {stocksList} = useSelector(state => state);

    const {stocks, stockLoading} = stocksList


    const data = [
        {id: 0, title: 'إستلام المشاريع', img: require('../assets/checkout.png'), nav: 'ProjectsReceipt'  , data: {projects ,stocks}},
        {id: 1, title: 'الإخراج', img: require('../assets/checkout.png'), nav: 'Checkout' , data: {projects , stocks}},
        {id: 2, title: 'الإنجازات', img: require('../assets/ach.png'), nav: 'Achievement' , data: {projects , products}},
        {id: 3, title: 'زراعة البذور', img: require('../assets/seeding.png'), nav: 'Seed' , data: {products}},
        {id: 4, title: 'التعقيل', img: require('../assets/taq.png'), nav: 'Taeqil' , data: {products}},
        {id: 5, title: 'التعشيب', img: require('../assets/ta3sheeb.png'), nav: 'Weed' , data: {products}},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/transform.png'), nav: 'TrimMove' , data: {products}},
        {id: 7, title: 'التدوير', img: require('../assets/rotate.png'), nav: 'Rotate' , data: {products} },
        {id: 8, title: 'النقل بين المشاتل', img: require('../assets/plant.png'), nav: 'Transfer' , data: {stocks , products}},
    ]



    setTimeout(() => setLoading(false), 3500)

    if (loading) {
        return (
            <Layout>
                <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                    <Header title='الصفحة الرئيسية'/>
                    <RefreshHandler>
                        <Container>
                            <Spinner size='large' status='success'/>
                        </Container>
                    </RefreshHandler>
                </ImageBackground>
            </Layout>
        );
    }

    return (
        <Layout>
            <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                <Header title='الصفحة الرئيسية'/>
                <RefreshHandler>
                    <Container>
                        <Grid>
                            {!productLoading && !projectLoading && !stockLoading
                                ? data.map((item) => {
                                    return (
                                        <Card key={item.id} onPress={() => {
                                            navigation.navigate(`${item.nav}` ,item )
                                        }}>
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
            </ImageBackground>

        </Layout>

    );

}


export default Home;