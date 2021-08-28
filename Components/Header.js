import React from "react";
import {Ionicons} from '@expo/vector-icons';
import {Button, ButtonText, HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity, View} from "react-native";



const Header = ({title, navigation, backNavigation,onTop}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle>
                    {title}
                </TitleStyle>


                    {
                        navigation &&
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {onTop}
                        <TouchableOpacity onPress={() => {
                            if (backNavigation) {
                                return navigation.goBack()
                            }

                            return navigation.navigate('Home')
                        }}>
                            <Ionicons name="arrow-back-circle"
                                      size={40}
                                      color="white"

                            />
                        </TouchableOpacity>
                        </View>
                    }

            </HeaderStyle>
        </HeaderOpacityStyle>
    )
}

export default Header;