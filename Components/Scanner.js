import {BtnIcon, ButtonText, Scan} from "./Styles";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {View} from "react-native";

const Scanner = ({
                     children,
                     navigation,
                     products,
                     handler
                 }) => {

    return (
        <View>
            {children}
            <BtnIcon style={{marginTop: 19}}
                     onPress={() => navigation.navigate('Scanner', {
                         products,
                         handler
                     })
                     }
            >
                <ButtonText>
                    <AntDesign name='search1' size={20}/>
                </ButtonText>

            </BtnIcon>
        </View>
    );
}





export default Scanner