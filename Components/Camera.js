import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import {BtnUploadImg, Button, ButtonText, Colors, UploadImgText} from "./Styles";
import {AntDesign} from "@expo/vector-icons";


function TakePicture({onSelectImage, unlinkPickedImage = false , hasImg= false }) {
    // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = useState('');

    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();


        if (!result.cancelled) {

            try {
                const {uri} = result

                setPickedImagePath(uri);

                onSelectImage({
                    uri: uri,
                    name: `${uri.split("/").pop()}`,
                    type:`image/${uri.split(".").pop()}`,
                    mimeType:`image/${uri.split(".").pop()}`,


                })

            } catch (e) {
                console.log(e)
            }

        }
    }
    const {green3} = Colors;

    useEffect(() => {
        if (unlinkPickedImage === true) {
            setPickedImagePath('')
        }
    }, [unlinkPickedImage])
    return (
        <View style={styles.screen}>
            <View>
                <Button onPress={openCamera}>

                    <ButtonText>رفع صورة</ButtonText>
                </Button>
            </View>
            <View style={styles.imageContainer}>
                {
                    pickedImagePath !== '' && <Image
                        source={{uri: pickedImagePath}}
                        style={hasImg ? styles.smallPreview: styles.image}
                    />
                }
            </View>
        </View>
    );
}

export default TakePicture;


const styles = StyleSheet.create({
    screen: {

    },

    imageContainer: {


        // borderTopWidth:1,
        // borderTopColor: Colors.greenLight1,

    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'cover'
    } ,
    smallPreview: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    }
});