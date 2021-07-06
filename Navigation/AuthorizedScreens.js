import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './../Screens/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Weed from "../Screens/Weed";
import Profile from "../Screens/Profile";
import Seed from "../Screens/Seed";
import Taeqil from "../Screens/Taeqil";
import TrimMove from "../Screens/TrimMove";
import {Octicons, AntDesign, SimpleLineIcons} from "@expo/vector-icons";
import {Animated, Dimensions, View} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeScreensContainer = () => {
    return (

        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Weed' component={Weed}/>
            <Stack.Screen name='Seed' component={Seed}/>
            <Stack.Screen name='Taeqil' component={Taeqil}/>
            <Stack.Screen name='TrimMove' component={TrimMove}/>
        </Stack.Navigator>
    )
}

/**
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {fontSize: 12},
                    tabStyle: {flex: 1, justifyContent: 'center', marginBottom: 8},
                    // indicatorStyle: {
                    //     marginHorizontal: '5%',
                    //     width: '40%'
                    // },
                    activeTintColor: '#FF7E68',
                    // inactiveTintColor: '#000000',
                    style: {
                        backgroundColor: 'white' ,
                        height:55,
                        position : 'absolute',
                        bottom:10,
                        marginHorizontal:10,
                        borderRadius:10

                    },
                    keyboardHidesTabBar: 'false',

                }}
                initialRouteName='Home'
            >
                <Tab.Screen name="Home" component={HomeScreensContainer}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (<Octicons name='home' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'الرئيسية'
                            }} listeners={({navigation,route}) => {
                                tapPress: e => {
                                    Animated.spring(tabOffsetValue,{
                                        toValue:0,
                                        useNativeDriver:true,
                                    }).start();
                                }
                }}
                />
                <Tab.Screen name="Profile" component={Profile}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (<AntDesign name='user' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'حسابي'
                            }}
                            listeners={({navigation,route}) => {
                                tapPress: e => {
                                    Animated.spring(tabOffsetValue,{
                                        toValue:getWidth() * 3,
                                        useNativeDriver:true,
                                    }).start();
                                }
                            }}
                />
                <Tab.Screen name="Logout" component={Profile}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (
                                        <SimpleLineIcons name='logout' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'تسجيل الخروج'
                            }}
                            listeners={({navigation,route}) => {
                                tapPress: e => {
                                    Animated.spring(tabOffsetValue,{
                                        toValue:getWidth() * 4,
                                        useNativeDriver:true,
                                    }).start();
                                }
                            }}
                />

            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 2,
                backgroundColor: '#FF7E68',
                position: 'absolute',
                bottom: 63,
                left: 30,
                transform:[
                    { translateX : tabOffsetValue }
                ]

            }}>

            </Animated.View>
        </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get("window").width;
    // Horizontal padding = 20
    width = width - 30

    return width / 4
}
export default AuthorizedScreens