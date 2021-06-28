import React from 'react';
import styled from 'styled-components/native';
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;
// colors
const Colors = {
    primary: '#1960d8',
    secondary: '#eef5ff',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    white: '#FFFFFF',
    green: '#10B981',
    red: '#EF4444',
};

export const {primary, secondary, tertiary, darkLight, white, green, red} = Colors;

export const Container = styled.View`
  flex :1;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${white};
`;

export const Content = styled.View`
  flex:1;
  width: 100%;
  align-items: center;

`;

export const Logo = styled.Image`
  width: 250px;
  height: 200px;
`;
