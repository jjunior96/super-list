import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    
    width: 100%;
    height: ${RFValue(100)}px;
    
    align-items: center;
    justify-content: center;
  `}
`;

export const Content = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.sucess};

    font-size: ${RFValue(24)}px;
    font-weight: bold;
  `}
`;
