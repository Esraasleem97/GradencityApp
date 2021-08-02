import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";

const Header = ({title, navigation , backNavigation}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle >
                    {title}
                </TitleStyle>
                {
                    navigation &&

                    <TouchableOpacity onPress={() => backNavigation ? navigation.goBack(): navigation.navigate('Home')}>
                        <Ionicons name="arrow-back-circle"
                                  size={40}
                                  color="white"

                        />
                    </TouchableOpacity>
                }

            </HeaderStyle>
        </HeaderOpacityStyle>
    )
}

export default Header;