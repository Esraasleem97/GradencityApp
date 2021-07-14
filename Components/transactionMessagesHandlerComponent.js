import React from 'react';
import {View} from "react-native";
import Messages from "./Messages";

const TransactionMessagesHandlerComponent = ({data, error}) => {

    return (

        error || data
            ?
            <View>
                <Messages error={error && error.product_id}
                          style={{paddingHorizontal: 40, fontWeight: 'bold'}}/>
                <Messages error={error && error.take_time} style={{paddingHorizontal: 40, fontWeight: 'bold'}}/>
                <Messages error={error && error.qty} style={{paddingHorizontal: 40, fontWeight: 'bold'}}/>
                <Messages error={error && error.type} style={{paddingHorizontal: 40, fontWeight: 'bold'}}/>

                {
                    data && data.success &&
                    <Messages Success='تمت العملية بنجاح' color='#22c929' style={{paddingHorizontal: 100}}
                              fontSize={25}/>
                }
            </View>
            : null
    );

}

export default TransactionMessagesHandlerComponent;