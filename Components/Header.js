import React from "react";
import {Ionicons} from '@expo/vector-icons';

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";
import {TouchableOpacity} from "react-native";

const Header = ({title, navigation, backNavigation, setCanCreateNewProduct}) => {

    return (
        <HeaderOpacityStyle>
            <HeaderStyle>
                <TitleStyle>
                    {title}
                </TitleStyle>
                {
                    navigation &&

                    <TouchableOpacity onPress={() => {

                        if (setCanCreateNewProduct) {

                            setCanCreateNewProduct(true)
                        }

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