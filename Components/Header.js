import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";
import OfflineNotification from "./offlineNotification";

const Header = ({title, navigation, backNavigation}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle>
                    {title}
                </TitleStyle>

                {
                    navigation &&

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
                }

            </HeaderStyle>
        </HeaderOpacityStyle>
    )
}

export default Header;