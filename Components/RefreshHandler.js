import React, {useCallback, useState} from "react";
import {RefreshControl, ScrollView} from "react-native";


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
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#36970c']} />}>
            {children}
        </ScrollView>
    )

}


export default RefreshHandler
