import React, {useCallback, useState} from "react";
import {FlatList, RefreshControl} from "react-native";


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

        <FlatList style={{height: '100%'}}
                  showsVerticalScrollIndicator={false}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#36970c']}/>}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps='always'
                  ListHeaderComponent={() => (children)}
                  data={[]}
                  renderItem={null}
                  keyExtractor={() => "App-Init"}
        />

    )

}


export default RefreshHandler
