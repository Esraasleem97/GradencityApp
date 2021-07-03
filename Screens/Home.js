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
import {ScrollView, View} from "react-native";

const Home = () => {

    const data = [
        {id: 0, title: 'الإدخال', img: require('../assets/plants4.png'), navigate: 'Checkin'},
        {id: 1, title: 'الإخراج', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 2, title: 'الإنجازات', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 3, title: 'زراعة البذور', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 4, title: 'التعقيل', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 5, title: 'التعشيب', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
        {id: 7, title: 'التدوير', img: require('../assets/plants1.jpg'), navigate: 'Checkin'},
    ]
    return (
        <Layout>
                <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                    <TitleContainer>
                        <TitlePage>الصفحة الرئيسية</TitlePage>
                    </TitleContainer>
                    <ScrollView>
                        <Container>
                        <Grid>
                            {data.map((item) => {
                                return (

                                    <Card key={item.id}>


                                        <CardImage resizeMode='contain' source={item.img}/>
                                        <CardText>{item.title}</CardText>
                                    </Card>
                                )
                            })}
                        </Grid>
                        </Container>
                    </ScrollView>
                </ImageBackground>

        </Layout>
    );

}


export default Home;