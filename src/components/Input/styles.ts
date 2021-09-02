import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TextInput)`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;

    padding: 0 ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
    
    background-color: ${theme.colors.item};
    
    border-radius: 12px;
    
    color: ${theme.colors.shape};
    
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;
