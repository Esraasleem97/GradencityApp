import React from 'react';
import {View} from "react-native";
import Messages from "./Messages";

const TransactionMessagesHandlerComponent = ({data, error}) => {
    let errorMessage = [];

    function eachData(error) {

        for (const [key, value] of Object.entries(error)) {
            errorMessage.push(value)
        }

        return errorMessage ;
    }

    return (


        <View style={error || data ? {margin:20} : [] }>
            {
                error && eachData(error) && errorMessage.map(
                    (value, index) =>
                            <Messages key={`error_${index}`}
                                      error={value[0]}
                                      style={{paddingHorizontal: 40, fontWeight: 'bold'}}/>
                )
            }


            {
                data && data.success &&
                <Messages Success='تمت العملية بنجاح' color='#22c929'
                          fontSize={18}/>
            }
        </View>

    );


}

export default TransactionMessagesHandlerComponent;