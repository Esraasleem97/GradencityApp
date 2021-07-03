import React from "react";
import {Layout} from "@ui-kitten/components";
import SharedScreens from "../Components/SharedScreen";
import Header from "../Components/Header";

const Weed = () => {

    return (
        <Layout>
            <Header title='زراعة البذور'/>
            <SharedScreens/>
        </Layout>

    )
}

export default Weed;