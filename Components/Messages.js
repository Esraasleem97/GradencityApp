import React from 'react';
import {PixelRatio, Text, View} from "react-native";

export const Message = ({
                            Success,
                            error,
                            color = '#e74545',
                            style,
                            fontSize = PixelRatio.getPixelSizeForLayoutSize(8)
                        }) => {
    return (
        <View style={{width: '100%', justifyContent: 'center', ...style}}>
            <Text style={{color, paddingBottom: 1, fontSize: fontSize}}>
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
