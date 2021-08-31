import styled, { css } from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    
    border-radius: 12px;
    
    padding: 16px;
    
    background-color: ${theme.colors.secondary};
    
    align-items: center;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    
    font-family: ${theme.fonts.primary_700};
    font-size: ${RFValue(15)}px;
  `}
`;
