import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";
import OfflineNotification from "./offlineNotification";

const Header = ({title, navigation, backNavigation, setCanCreateNewProduct}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle>
                    {title}
                </TitleStyle>
                <OfflineNotification/>
                {
                    navigation &&

                    <TouchableOpacity onPress={() => {
console.log({setCanCreateNewProduct , a:'sd'})
                        if (setCanCreateNewProduct) {
                            console.log(1)
                            setCanCreateNewProduct(true)
                        }

                        if (backNavigation) {
                            return navigation.goBack()
                        }
                        console.log(0)
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