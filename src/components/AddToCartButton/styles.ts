import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  isChecked?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, isChecked }) => css`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 12px 24px;
    
    border-radius: 12px;
    border: 1px solid ${theme.colors.disabled};
    
    ${isChecked && css`
      border: 1px solid ${theme.colors.shape};
      /* background-color: ${theme.colors.sucess}; */
    `}
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, isChecked }) => css`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_400};

    color: ${theme.colors.disabled};
    
    ${isChecked && css`
      color: ${theme.colors.shape};
    `}
  `}
`;

export const Icon = styled(FontAwesome)<Props>`
  ${({ theme, isChecked }) => css`
    font-size: ${RFValue(24)}px;

    color: ${theme.colors.disabled};

    margin-right: 8px;

    ${isChecked && css`
      color: ${theme.colors.shape};
    `}
  `}
`;
