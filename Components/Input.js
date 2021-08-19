import React from "react";
import {View} from "react-native";
import {LeftIcon, RightIcon, Colors, Label, TextInputStyled} from "./Styles";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const {green1, darkLight} = Colors

const Input = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {

    return (
        <View>
            <LeftIcon>
                <AntDesign name={icon} size={25} color={green1}/>
            </LeftIcon>

            <Label>{label}</Label>
            <TextInputStyled {...props} placeholderTextColor={darkLight} returnKeyType="go"
            autoFocus={true}
            />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} color={darkLight} size={25}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Input;