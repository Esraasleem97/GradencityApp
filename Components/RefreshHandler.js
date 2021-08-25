import React, {useCallback, useState} from "react";
import {KeyboardAvoidingView, Platform, RefreshControl, View} from "react-native";
import {FlatList} from 'react-native-gesture-handler'
import {height} from "./Styles";


const RefreshHandler = ({children, pullToRefresh}) => {



    const wait = timeout => {

        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => {
            setRefreshing(false)


            return pullToRefresh ? pullToRefresh(true) : null;
        });


    }, []);


    return (
        <KeyboardAvoidingView enabled keyboardVerticalOffset={25}
                              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <FlatList
                keyExtractor={() => 'App-Init'}
                style={{height: height}}
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={true}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#36970c']}
                    />
                }
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps='handled'

                data={[0]}
                renderItem={() =>

                    <View>

                        {children}
                    </View>

                }
            />

        </KeyboardAvoidingView>
    )
}


export default RefreshHandler
