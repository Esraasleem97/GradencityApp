import React from "react";

import {HeaderOpacityStyle, HeaderStyle, TitleStyle} from "./Styles";

const Header = ({title}) =>{

    return(
            <HeaderOpacityStyle>
                <HeaderStyle>
                    <TitleStyle>{title}</TitleStyle>
                </HeaderStyle>
            </HeaderOpacityStyle>
    )
}

export default Header;