import React, {useState} from "react";
import {Layout} from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";


const Seed = ({navigation, route}) => {


    const {params: {data: {products}}} = route

    const [qty, setQty] = useState(null);

    const [takeTime, seTakenTime] = useState(null);

    const handleOnSelectQty = (val) => {
        setQty(val)

        alert(qty)
    }

    const handleOnSelectTakenTime = (val) => {
         seTakenTime(val)

        alert(takeTime)
    }

    return (
        <Layout>
            <Header title='زراعة البذور' navigation={navigation}/>
            <SharedScreens onTop={true} onSelectQty={handleOnSelectQty} onSelectTakenTime={handleOnSelectTakenTime}>
                <SelectDropDown items={products}/>
            </SharedScreens>
        </Layout>
    )
}

export default Seed;