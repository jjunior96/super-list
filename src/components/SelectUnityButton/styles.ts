import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface UnityProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.primary};

    padding: 0 ${RFValue(24)}px;
  `}
`;

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    
    width: 100%;
    height: ${RFValue(100)}px;
    
    align-items: center;
    justify-content: center;

    /* padding-top: ${getStatusBarHeight() + 16}px; */
  `}
`;

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.sucess};

    font-size: ${RFValue(24)}px;
    font-family: ${theme.fonts.primary_700};
  `}
`;



export const UnityContainer = styled.TouchableOpacity<UnityProps>`
  ${({ theme, isActive }) => css`
    width: 100%;

    background-color: ${theme.colors.primary};

    padding: ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;

    ${isActive && css`
      border: 1px solid ${theme.colors.shape};
    `}
  `}
`;

export const UnityName = styled.Text`
   ${({ theme }) => css`
    color: ${theme.colors.shape};
    
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const Footer = styled.View`
  width: 100%;

  padding: 0 0 ${getBottomSpace() + 24}px;
`;