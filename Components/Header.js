import React from "react";
import {Layout} from "@ui-kitten/components";
import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";

const Header = ({title}) =>{

    return(
        <Layout>
            <HeaderOpacityStyle>
                <HeaderStyle>
                    <TitleStyle>{title}</TitleStyle>
                </HeaderStyle>
            </HeaderOpacityStyle>

        </Layout>
    )
}

export default Header;