import React from "react";
import {Container, Content, FormArea} from "./Styles";
import Input from "./Input";
import RefreshHandler from "./RefreshHandler";
import TakePicture from "./Camera";

const SharedScreens = ({
                           children,
                           onTop,
                           onBottom,
                           onSelectQty,
                           onSelectTakenTime,
                           qty,
                           takeTime,
                           onSelectImage,
                           unlinkPickedImage
                       }) => {


    return (

        <RefreshHandler>

            <Container>
                <Content>

                    <FormArea>
                        {children && onTop ? children : null}
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الكمية هنا'
                            keyboardType='number-pad'
                            value={qty}
                            onChangeText={onSelectQty}


                        />
                        <Input


                            label='الوقت المستغرق بالدقائق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='number-pad'
                            value={takeTime}
                            onChangeText={onSelectTakenTime}
                        />
                        <TakePicture onSelectImage={onSelectImage} unlinkPickedImage={unlinkPickedImage}/>
                        {children && onBottom ? onBottom : null}

                    </FormArea>


                </Content>
            </Container>


        </RefreshHandler>


    )
}

export default SharedScreens;