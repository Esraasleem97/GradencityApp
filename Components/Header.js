import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";

const Header = ({title, navigation}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                {
                    navigation &&
                    <TouchableOpacity>
                        <Ionicons name="arrow-back-circle"
                                  size={40}
                                  color="white"
                                  onPress={() => navigation.navigate('Home')}
                                  style={{marginLeft: 10}}
                        />
                    </TouchableOpacity>
                }
                <TitleStyle>
                    {title}
                </TitleStyle>
            </HeaderStyle>
        </HeaderOpacityStyle>
    )
}

export default Header;