import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './../Screens/Home';

const Tab = createBottomTabNavigator();


/**
 *
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {fontSize: 14 },
                    tabStyle: {flex: 1, justifyContent: 'center' },
                    indicatorStyle: {
                        marginHorizontal: '5%',
                        width: '40%'
                    },
                    activeTintColor: '#094414',
                    inactiveTintColor: '#000000',
                    style: {backgroundColor: 'white'},
                }}
                initialRouteName='Home'
            >
                <Tab.Screen name="Home" component={Home}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default AuthorizedScreens