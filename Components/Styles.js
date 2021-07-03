import React from 'react';
import styled from 'styled-components/native';
import Constants from "expo-constants";

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
  width: 100%;
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
  width: 250px;
  height: 200px;
`;

export const Content = styled.View`
  width: 80%;
  height: 100%;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-vertical: ${StatusBarHeight + 5}px;
  font-size: 32px;
  font-weight: 800;
  color: ${tertiary};
`;


export const FormArea = styled.View`
  width: 100%;
  height: 100%;
`;
export const TextInputStyled = styled.TextInput`
  background-color: ${secondary};
  padding: 15px 40px;
  height: 50px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${darkgray};
  text-align: right;

`;

export const Label = styled.Text`
  color: ${darkgray};
  font-size: 13px;
  text-align: right;
`;

export const LeftIcon = styled.TouchableOpacity`
  left: 15px;
  top: 33px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 33px;
  position: absolute;
  z-index: 1;
`;

export const ForgetPassword = styled.Text`
  color: ${darkLight};
  text-align: right;
  margin: 10px 5px;
  font-size: 14px;
`;
export const Button = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${green3};
  justify-content: center;
  border-radius: 5px;
  margin: 5px;
  height: 60px;

`;
export const ButtonText = styled.Text`
  color: ${white};
  font-size: 18px;
  text-align: center;
`;
export const TitleContainer = styled.View`
  width: 100%;
  height: 130px;
  background-color: ${green3};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
export const TitlePage = styled.Text`
  color: ${white};
  margin-top:30px ;
  text-align: center;
  font-size: 25px;
`;

export const Grid = styled.View`
  position: relative;
  top: -60px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Card = styled.TouchableOpacity`
  border: 1px solid ${secondary};
  border-radius: 5px;
  padding: 15px 15px 0 15px;
  margin: 10px;
  background-color: ${white};
  justify-content: center;
  shadow-color: ${green2};
  shadow-offset: {
    width: 0;
    height: 1px;
  };
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 5;
`;

export const CardText = styled.Text`
  font-size: 14px;
  color: ${tertiary};
  text-align: center;
`;
export const CardImage = styled.Image`
  width: 80px;
  height: 80px;
`;
