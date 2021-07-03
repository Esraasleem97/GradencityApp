import React from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {
    Container,
    Grid,
    ImageBackground,
    Title,
    Card,
    CardImage,
    CardText,
    TitlePage,
    TitleContainer, GridContainer
} from "../Components/Styles";
import {ScrollView} from "react-native";

const Home = ({navigation}) => {

    const data = [
        {id: 0, title: 'الإدخال', img: require('../assets/plant-logo.png'), navigate: 'Checkin'},
        {id: 1, title: 'الإخراج', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 2, title: 'الإنجازات', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 3, title: 'زراعة البذور', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 4, title: 'التعقيل', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 5, title: 'التعشيب', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 6, title: 'تقليم أو نقل', img: require('../assets/plant1.png'), navigate: 'Checkin'},
        {id: 7, title: 'التدوير', img: require('../assets/plant1.png'), navigate: 'Checkin'},
    ]
    return (
        <Layout>

                <ImageBackground source={require('../assets/plants.jpg')}>

                    <ScrollView>
                        <Container>
                            <TitleContainer>
                                <TitlePage>الصفحة الرئيسية</TitlePage>
                            </TitleContainer>

                        <Grid>
                            {data.map((item) => {
                                return (
                                    <Card>
                                        <CardText>{item.title}</CardText>
                                        <CardImage resizeMode='contain' source={item.img}/>
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