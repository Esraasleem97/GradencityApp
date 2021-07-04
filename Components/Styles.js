import React from 'react';
import styled from 'styled-components/native';
import Constants from "expo-constants";
import {Platform} from "react-native";

const StatusBarHeight = Constants.statusBarHeight;
// colors
export const Colors = {
    primary: '#1960d8',
    secondary: '#f1f5f5',
    tertiary: '#11270b',
    brown: '#9d551a',
    greenLight1: '#f5fdf7',
    darkLight: '#9CA3AF',
    white: '#FFFFFF',
    green1: '#10B981',
    green2: '#149623',
    green3: '#099567',
    greenLight2: '#d5f2e3',
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
    greenLight1,
    greenLight2,
    red,
    darkgray,
    brown,
    brownLight
} = Colors;

let shadow = Platform.OS === 'ios'
    ? ` 
  shadow-opacity: 0.3;`
    : `elevation: 15;`;


export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;



`;
export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;

`;
export const HeaderOpacityStyle = styled.View`
  width: 100%;
  height: 90px;
  background-color: ${greenLight2};
  border-bottom-right-radius: 200px;
`;


export const HeaderStyle = styled.View`
  padding-top: 10px;
  flex-direction: row;
  height: 80px;
  background-color: ${green3};
  ${shadow}
  align-items: center;
  border-bottom-right-radius: 200px;
`;
export const TitleStyle = styled.Text`
  margin-left: ${Platform.OS === 'ios' ? '130px' : '140px'};
  color: ${white};
  font-size: 30px;
  font-weight: bold;
`;
export const HeaderLogin = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;


export const Shadow = styled.View`
  width: 100%;
  height: ${108}px;
  background-color: #ffbab0;
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${100}px;
  ${shadow}
`;

export const HeaderShape = styled.View`
  width: 100%;
  height: ${100}px;
  background-color: #FF7E68;
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${100}px;
`;


export const Logo = styled.Image`
  width: ${200}px;
  height: ${200}px;
  border-radius: ${500}px;
`;

export const Content = styled.View`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.Text`
  margin-vertical: ${StatusBarHeight + 5}px;
  font-size: ${32}px;
  font-weight: 800;
  color: ${white};

`;


export const FormArea = styled.View`
  width: 100%;
  height: 100%;
`;
export const TextInputStyled = styled.TextInput`
  background-color: ${secondary};
  padding: ${15}px ${40}px;
  height: ${50}px;
  border-radius: ${5}px;
  font-size: ${16}px;
  margin-top: ${3}px;
  margin-bottom: ${10}px;
  color: ${darkgray};
  text-align: right;

`;

export const Label = styled.Text`
  color: ${darkLight};
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
  font-size: ${14}px;
`;
export const Button = styled.TouchableOpacity`
  padding: ${15}px;
  background-color: #FF7E68;
  justify-content: center;
  border-radius: ${50}px;
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
  background-color: #ACD876;
  ${shadow}
  height: ${90}px;
  border-bottom-left-radius: ${30}px;
  border-bottom-right-radius: ${30}px;
`;
export const TitlePage = styled.Text`
  color: ${tertiary};
  margin-top: ${30}px;
  text-align: center;
  font-size: ${30}px;
  font-weight: bold;
`;

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
let CheckPlatFormForCardDesign;

if (Platform.OS === 'ios') {
    CheckPlatFormForCardDesign = ` 
  shadow-opacity: 0.3;`;
} else {
    CheckPlatFormForCardDesign = `elevation: 5`;
}

export const Card = styled.TouchableOpacity`
  border-radius: ${5}px;
  padding: ${15}px;
  margin: ${10}px;
  background-color: ${white};
  justify-content: center;
  align-items: center;
  ${CheckPlatFormForCardDesign}
`;


export const CardText = styled.Text`
  font-size: ${15}px;
  color: ${tertiary};

`;
export const CardImage = styled.Image`
  width: ${90}px;
  height: ${90}px;


`;

