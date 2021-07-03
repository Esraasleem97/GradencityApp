import React from 'react';
import {Layout} from "@ui-kitten/components";
import {
    Container,
    Grid,
    ImageBackground,
    Card,
    CardImage,
    CardText,
    TitlePage,
    TitleContainer
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";

const Home = ({navigation}) => {

    const data = [
        {id: 0, title: 'الإدخال', img: require('../assets/plants1.png'), nav: 'Checkin'},
        {id: 1, title: 'الإخراج', img: require('../assets/plants2.jpg'), nav: 'Checkin'},
        {id: 2, title: 'الإنجازات', img: require('../assets/plants3.png'), nav: 'Checkin'},
        {id: 3, title: 'زراعة البذور', img: require('../assets/plants4.jpg'), nav: 'Weed'},
        {id: 4, title: 'التعقيل', img: require('../assets/plants5.jpg'), nav: 'Checkin'},
        {id: 5, title: 'التعشيب', img: require('../assets/plants6.png'), nav: 'Checkin'},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/plants7.png'), nav: 'Checkin'},
        {id: 7, title: 'التدوير', img: require('../assets/plants8.png'), nav: 'Checkin'},
    ]
    return (


        <RefreshHandler>
            <Layout>
                <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                    <TitleContainer>
                        <TitlePage>الصفحة الرئيسية</TitlePage>
                    </TitleContainer>

                        <Container>
                            <Grid>
                                {data.map((item) => {
                                    return (

                                        <Card key={item.id} onPress={() => {navigation.navigate(`${item.nav}`)}}>
                                            <CardImage resizeMode='contain' source={item.img}/>
                                            <CardText>{item.title}</CardText>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </Container>

                </ImageBackground>

            </Layout>
        </RefreshHandler>

    );

}


export default Home;