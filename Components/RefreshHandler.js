import React, {useCallback, useState} from "react";
import {RefreshControl, View} from "react-native";
import {FlatList} from 'react-native-gesture-handler'

const RefreshHandler = ({children}) => {

    const wait = timeout => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);


    return (


        <FlatList
            style={{width: '100%', height: '100%'}}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#36970c']}
                />
            }
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps='always'
            data={[]}
            renderItem={null}
            ListEmptyComponent={() =>
                <View
                    style={{width: '99%', height: '99%'}}>
                    {children}
                </View>

            }
        />


    )
}


export default RefreshHandler
