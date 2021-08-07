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
import AddProduct from "../Screens/AddProduct";
import {Colors, Line} from "../Components/Styles";
import Scanner from "../Screens/Scanner";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
/**
 *
 * @returns {JSX.Element}
 * @constructor
 * Stack Navigator Screens
 */
export const HomeScreensContainer = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
            <Stack.Screen name='AddProduct' component={AddProduct}/>
            <Stack.Screen name='Scanner' component={Scanner}/>

        </Stack.Navigator>
    )
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * Tab Bottom Navigator
 */
const TabNavigator = () => {

    const dispatch = useDispatch()

    const LogoutHandler = () => {
        return dispatch(userLogoutHandler())
    }
    return (
        <Tab.Navigator
            // tabBarOptions={tabBarOptions}
            screenOptions={({route}) => ({
                headerShown: false ,
                tabBarShowLabel:false,
                tabBarActiveTintColor:'#FF7E68',
                tabBarInactiveTintColor:'#999696',
                tabBarStyle:{
                    height: 60,
                    backgroundColor: "white",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    position: "absolute",
                    zIndex:-1,
                    bottom: 0,
                },
                tabBarLabelStyle : {
                    fontSize:16
                },
                tabBarHideOnKeyboard:true,
                tabBarIcon: ({color, size, text, onPress, isViewer}) => {
                    let iconName;
                    if (route.name === 'HomeScreens') {
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


        >
            <Tab.Screen name="HomeScreens" component={HomeScreensContainer}/>

            <Tab.Screen name="Logout" component={HomeScreensContainer}/>

        </Tab.Navigator>


    );
}

/**
 * Tab Navigator Option & Style
 * @type {{tabBarStyle: {backgroundColor: string, bottom: number, borderTopRightRadius: number, position: string, height: number, borderTopLeftRadius: number}, headerShown: boolean, tabBarLabelStyle: {fontSize: number}, tabBarActiveTintColor: string, tabBarInactiveTintColor: string, tabBarShowLabel: boolean}}
 */

const {orangeLight} = Colors;

function CustomDrawerContent(props) {
    console.log(props)
    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props} >
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/drawer.jpg')} resizeMode='cover' style={styles.img}/>
                </View>
                <View style={{marginTop: 10}}>
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
                    />
                    <Line/>
                    <DrawerItem
                        label="إضافة بند"
                        onPress={() => {
                            props.navigation.navigate('AddProduct')
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

    return (
        <NavigationContainer>
            <Drawer.Navigator hideStatusBar={true} screenOptions={{headerShown: false}} drawerContent={props => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
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
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: 300,

    }
})

