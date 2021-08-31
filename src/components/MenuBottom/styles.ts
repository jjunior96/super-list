import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled.View`
  ${({ theme }) => css`
    bottom: 0;
    
    flex-direction: row;
    
    width: 100%;
    
    align-items: center;
    justify-content: space-between;
    
    border-top-width: 1px;
    border-top-color: ${theme.colors.item};
    
    background-color: ${theme.colors.background};
    
    height: ${RFValue(100)}px;

    padding: 24px 24px ${getBottomSpace() + 24}px;
  `}
`;

export const ItemContainer = styled(RectButton)<ButtonProps>`
  ${({ theme }) => css`
    width: 120px;
    flex-direction: row;
    align-items: center; 

    /* color: ${theme.colors.sucess}; */
  `}
`;

export const Image = styled.Image`
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
`;

export const ItemInfo = styled.View`
  margin-left: 8px;
`;

export const QuantityTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.sucess};
  `}
`;

export const QuantityValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_700};

    color: ${theme.colors.sucess};
  `}
`;

export const AddButton = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(64)}px;
    height: ${RFValue(64)}px;

    /* border-radius: 30px;
    
    background-color: ${theme.colors.secondary};
    
    align-items: center;
    justify-content: center;   */
  `}
`;
