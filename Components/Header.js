import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";

const Header = ({title, navigation}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle>
                    {title}
                </TitleStyle>
                {
                    navigation &&

                    <TouchableOpacity>
                        <Ionicons name="arrow-back-circle"
                                  size={40}
                                  color="white"
                                  onPress={() => navigation.navigate('Home')}
                        />
                    </TouchableOpacity>
                }

            </HeaderStyle>
        </HeaderOpacityStyle>
    )
}

export default Header;