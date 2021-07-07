import React from 'react';
import {Text, View} from "react-native";

export const Message = ({ children , color='#e74545' , style}) => {
    return (
        <View style={{width:'100%',justifyContent:'flex-start' , ...style}}>
            <Text style={{color , paddingBottom:10}}>
                {children}
            </Text>
        </View>
    );

}
Message.defaultProps = {
    variant: 'info',

}
export default Message;
