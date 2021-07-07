import React from 'react';
import {Layout} from "@ui-kitten/components";
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

const Home = ({navigation}) => {

    const data = [
        {id: 0, title: 'الإدخال', img: require('../assets/plants1.png'), nav: 'Checkin'},
        {id: 1, title: 'الإخراج', img: require('../assets/plants2.jpg'), nav: 'Checkout'},
        {id: 2, title: 'الإنجازات', img: require('../assets/plants3.png'), nav: 'Achievement'},
        {id: 3, title: 'زراعة البذور', img: require('../assets/plants4.jpg'), nav: 'Seed'},
        {id: 4, title: 'التعقيل', img: require('../assets/plants5.jpg'), nav: 'Taeqil'},
        {id: 5, title: 'التعشيب', img: require('../assets/plants6.png'), nav: 'Weed'},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/plants7.png'), nav: 'TrimMove'},
        {id: 7, title: 'النقل بين المشاتل', img: require('../assets/plants8.png'), nav: 'Transfer'},
        {id: 8, title: 'التدوير', img: require('../assets/plants8.png'), nav: 'Rotate'},

    ]
    return (

        <Layout>
            <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                <Header title='الصفحة الرئيسية'/>
                <RefreshHandler>
                    <Container>
                        <Grid>
                            {
                                data.map((item) => {
                                    return (
                                        <Card key={item.id} onPress={() => {navigation.navigate(`${item.nav}`)}}>
                                            <CardImage resizeMode='contain' source={item.img}/>
                                            <CardText>{item.title}</CardText>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                </RefreshHandler>
            </ImageBackground>

        </Layout>


    );

}


export default Home;