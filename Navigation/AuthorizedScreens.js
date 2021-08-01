import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {EvilIcons, Ionicons} from "@expo/vector-icons";
import Home from './../Screens/Home';
import Weed from "../Screens/Weed";
import Seed from "../Screens/Seed";
import Taeqil from "../Screens/Taeqil";
import TransferBetweenPlants from "../Screens/TransferBetweenPlants";
import TrimMove from "../Screens/TrimMove";
import Achievement from '../Screens/Achievement';
import Rotate from "../Screens/Rotate";
import Checkin from "../Screens/Checkin";
import Checkout from "../Screens/Checkout";
import {TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {Text} from "@ui-kitten/components";
import {useDispatch} from "react-redux";
import {userLogoutHandler} from "../Redux/Actions/userActions";
import ProjectsReceipt from "../Screens/ProjectReceipt";
import AddProject from "../Screens/AddProject";
import AddClause from "../Screens/AddClause";
import {AddsText, Colors, Line} from "../Components/Styles";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const HomeScreensContainer = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Checkin' component={Checkin}/>
            <Stack.Screen name='Checkout' component={Checkout}/>
            <Stack.Screen name='ProjectsReceipt' component={ProjectsReceipt}/>
            <Stack.Screen name='Weed' component={Weed}/>
            <Stack.Screen name='Seed' component={Seed}/>
            <Stack.Screen name='Taeqil' component={Taeqil}/>
            <Stack.Screen name='TrimMove' component={TrimMove}/>
            <Stack.Screen name='Transfer' component={TransferBetweenPlants}/>
            <Stack.Screen name='Achievement' component={Achievement}/>
            <Stack.Screen name='Rotate' component={Rotate}/>
            <Stack.Screen name='AddProject' component={AddProject}/>
            <Stack.Screen name='AddClause' component={AddClause}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    const dispatch = useDispatch()

    const LogoutHandler = () => {
        return dispatch(userLogoutHandler())

    }


    return (

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size, text, onPress, isViewer}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                        size = 20
                        text = 'الرئيسية'
                        isViewer = true
                    } else if (route.name === 'Logout') {
                        iconName = 'exit';
                        size = 20
                        text = 'تسجيل الخروج'
                        onPress = LogoutHandler
                        isViewer = false

                    }

                    return (
                        isViewer ? <View>
                                <Ionicons style={{alignSelf: 'center', justifyContent: 'center'}}
                                          name={iconName} size={size} color={color}/>
                                <Text>{text}</Text>
                            </View>
                            :
                            <TouchableOpacity onPress={onPress}>
                                <Ionicons onPress={onPress} style={{alignSelf: 'center', justifyContent: 'center'}}
                                          name={iconName} size={size} color={color}/>
                                <Text onPress={onPress}>{text}</Text>
                            </TouchableOpacity>
                    );
                }
            })
            }
            tabBarOptions={tabBarOptions}
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={HomeScreensContainer}/>

            <Tab.Screen name="Logout" component={HomeScreensContainer}/>

        </Tab.Navigator>


    );
}
const tabBarOptions = ({
    labelStyle: {fontSize: 14},
    tabStyle: {flex: 1, justifyContent: 'center', marginBottom: 8},
    indicatorStyle: {
        marginHorizontal: '5%',
        width: '40%'
    },
    activeTintColor: '#FF7E68',
    inactiveTintColor: '#999696',
    style: {
        height: 60,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: "absolute",
        bottom: 0,
    },
    keyboardHidesTabBar: 'false',
    showLabel: false
})
const {greenLight2,redLight,white,orangeLight} = Colors;

function CustomDrawerContent(props) {
    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props} >
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/drawer.jpg')} resizeMode='cover' style={styles.img}/>
                </View>


<View style={{marginTop:10}}>
                <DrawerItem
                    label='إضافة مشروع'
                    onPress={() => {
                        props.navigation.navigate('AddProject')
                    }}
                    labelStyle={styles.item}
                    icon={() => (
                        <EvilIcons
                            name="plus"
                            color={orangeLight}
                            size={30}
                        />
                    )}
                    activeBackgroundColor={redLight}
                    activeTintColor={white}


                />

<Line/>
                <DrawerItem
                    label="إضافة بند"
                    onPress={() => {
                        props.navigation.navigate('AddClause')
                    }}
                    labelStyle={styles.item}
                    icon={() => (
                        <EvilIcons
                            name="plus"
                            color={orangeLight}
                            size={30}
                        />
                    )}
                />
</View>
                <Line/>

            </DrawerContentScrollView>
        </View>
    );
}

/**
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={TabNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>


    );

}

export default AuthorizedScreens

const styles = StyleSheet.create({
    drawerContent: {
        marginTop: -10,
        flex: 1
    },
    item: {

        fontSize: 17,

    },
    imgContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img : {
        width: '100%',
        height: 300,

    }
})
