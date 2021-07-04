import React from "react";
import {View} from "react-native";
import {LeftIcon, RightIcon, Colors, Label, TextInputStyled} from "./Styles";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const {green1, darkLight} = Colors

const Input = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {

    return (
        <View>
            <RightIcon>
                <AntDesign name={icon} size={20} color={green1}/>
            </RightIcon>

            <Label>{label}</Label>
            <TextInputStyled {...props} placeholderTextColor={darkLight}/>
            {isPassword && (
                <LeftIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} color={darkLight} size={20}/>
                </LeftIcon>
            )}
        </View>
    )
}

export default Input;