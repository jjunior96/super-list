import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    
    width: 100%;
    height: ${RFValue(100)}px;
    
    align-items: center;
    justify-content: center;

    padding-top: ${getStatusBarHeight() + 16}px;
  `}
`;

export const Content = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.sucess};

    margin-bottom: 6px;

    font-size: ${RFValue(24)}px;
    font-family: ${theme.fonts.primary_700};
  `}
`;

export const TotalPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.sucess};

    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

