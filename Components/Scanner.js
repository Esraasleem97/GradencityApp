import {BtnIcon, ButtonText, Scan} from "./Styles";
import {AntDesign} from "@expo/vector-icons";
import React from "react";

const Scanner = ({
                     children,
                     navigation,
                     products,
                     handler
                 }) => {

    return (
        <Scan>
            {children}
            <BtnIcon style={{marginTop: 19}}
                     onPress={() => navigation.navigate('Scanner', {
                         products,
                         handler
                     })
                     }
            >
                <ButtonText>
                    <AntDesign name='search1' size={20}/>
                </ButtonText>

            </BtnIcon>
        </Scan>
    );
}





export default Scanner