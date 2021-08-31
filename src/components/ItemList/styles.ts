import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  check?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, check }) => css`
    width: 100%;
    background-color: ${theme.colors.item};
    
    padding: ${RFValue(12)}px;
    
    border-radius: ${RFValue(8)}px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: ${RFValue(16)}px;
    
    box-shadow: 0 ${RFValue(4)}px ${RFValue(6)}px rgba(0, 0, 0, 0.1);
    
    opacity: ${check === true ? 0.4 : 1};
  `}
`;

export const ItemsLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: ${RFValue(44)}px;
  width: ${RFValue(44)}px;
  
  background-color: transparent;
  
  border-radius: ${RFValue(8)}px;
`;

export const ItemInfo = styled.View`
  margin-left: ${RFValue(12)}px;
`;

export const ItemName = styled.Text`
   ${({ theme }) => css`
    color: ${theme.colors.shape};
    
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_700};
    
    margin-bottom: ${RFValue(4)}px;
  `}
`;

export const ItemDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const ItemCheck = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
  
    border: ${RFValue(2)}px solid ${theme.colors.sucess};
    border-radius: ${RFValue(50)}px;
  
    align-items: center;
    justify-content: center;
  
  padding: 0 0 ${RFValue(2)}px;
 `}
`;
