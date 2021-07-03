import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../Components/Styles'
import Login from "../Screens/Login";


const Stack = createStackNavigator();

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for unauthenticated user
 */
  const UnAuthorizedScreens = () => {
      const {green3,white} = Colors;
      const ScreensOptions = {
          headerStyle : {backgroundColor:green3,elevation:0},
          headerTintColor:`${white}`,
      };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' headerMode={true}>
                <Stack.Screen name="Login" component={Login} headerShown={false} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default UnAuthorizedScreens