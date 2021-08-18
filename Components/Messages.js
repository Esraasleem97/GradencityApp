import React from 'react';
import {Text, View} from "react-native";

export const Message = ({Success ,  error , color='#e74545' , style , fontSize= 18}) => {
    return (
        <View style={{width:'100%',justifyContent:'center' ,alignItems:'center', ...style}}>
            <Text style={{color , paddingBottom:1 ,fontSize:fontSize , fontWeight: 'bold' }}>
                {error}
                {Success}
            </Text>
        </View>
    );

}
Message.defaultProps = {
    variant: 'info',

}
export default Message;
