import React from 'react';
import styled from 'styled-components/native';
import Constants from "expo-constants";
import { Platform} from "react-native";

const StatusBarHeight = Constants.statusBarHeight;
// colors
export const Colors = {
    primary: '#1960d8',
    secondary: '#f1f5f5',
    tertiary: '#11270b',
    brown: '#9d551a',
    darkLight: '#9CA3AF',
    white: '#FFFFFF',
    green1: '#10B981',
    green2: '#149623',
    green3: '#099567',
    greenLight: '#d5f2e3',
    red: '#EF4444',
    darkgray: '#555555',
};

const {
    primary,
    secondary,
    tertiary,
    darkLight,
    white,
    green1,
    green2,
    green3,
    greenLight,
    red,
    darkgray,
    brown
} = Colors;


export const Container = styled.View`
  width:100%;
  height: 100%;
  align-items: center;
`;
export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;

`;
export const HeaderLogin = styled.View`
  width: 100%;
  height: 200px;
`;

export const Logo = styled.Image`
  width: ${250}px;
  height:${200}px;
`;

export const Content = styled.View`
  width: 80%;
  height: 100%;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-vertical: ${StatusBarHeight + 5}px;
  font-size: ${32}px;
  font-weight: 800;
  color: ${tertiary};
`;


export const FormArea = styled.View`
  width: 100%;
  height: 100%;
`;
export const TextInputStyled = styled.TextInput`
  background-color: ${secondary};
  padding:${15}px ${40}px;
  height: ${50}px;
  border-radius:${5}px;
  font-size: ${16}px;
  margin-top: ${3}px;
  margin-bottom: ${10}px;
  color: ${darkgray};
  text-align: right;

`;

export const Label = styled.Text`
  color: ${darkgray};
  font-size: ${13}px;
  text-align: right;
`;

export const LeftIcon = styled.TouchableOpacity`
  left: ${15}px;
  top: ${33}px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: ${15}px;
  top: ${33}px;
  position: absolute;
  z-index: 1;
`;

export const ForgetPassword = styled.Text`
  color: ${darkLight};
  text-align: right;
  margin: ${10}px ${5}px; 
  font-size:${14}px;
`;
export const Button = styled.TouchableOpacity`
  padding: ${15}px;
  background-color: ${green3};
  justify-content: center;
  border-radius: ${5}px;
  margin: ${5}px;
  height: ${60}px;

`;
export const ButtonText = styled.Text`
  color: ${white};
  font-size: ${18}px;
  text-align: center;
`;
export const TitleContainer = styled.View`
  width: 100%;
  height:${130}px;
  background-color: ${green3};
  border-bottom-left-radius: ${30}px;
  border-bottom-right-radius: ${30}px;
`;
export const TitlePage = styled.Text`
  color: ${white};
  margin-top:${30}px;
  text-align: center;
  font-size: ${25}px;
`;

export const Grid = styled.View`
  position: relative;
  top: ${-60}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
let CheckPlatFormForCardDesign;
if (Platform.OS === 'ios') {
  CheckPlatFormForCardDesign =`
  border: 1px solid ${secondary};
  border-radius:${5}px;
  padding: ${15}px ${15}px ${0}px ${15}px;
  margin: ${10}px;
  background-color: ${white};
  justify-content: center;
  shadow-color: ${green2};
  shadow-offset: {
    width: 0;
    height:${1}px;
  };
  shadow-opacity: 0.5;
  shadow-radius: ${5}px;

`;
}else {
   CheckPlatFormForCardDesign =`
  border: 1px solid ${secondary};
  border-radius:${5}px;
  padding: ${15}px ${15}px ${0}px ${15}px;
  margin: ${10}px;
  background-color: ${white};
  justify-content: center;
  elevation: 5`;
}

export const Card = styled.TouchableOpacity`${CheckPlatFormForCardDesign }`;


export const CardText = styled.Text`
  font-size:${14}px;
  color: ${tertiary};
  text-align: center;
`;
export const CardImage = styled.Image`
  width: ${80}px;
  height:${80}px;
`;
