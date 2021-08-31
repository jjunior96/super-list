import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;

    padding: 0 16px;
    margin-bottom: 16px;
    
    background-color: ${theme.colors.item};
    
    border-radius: 12px;
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    
    color: ${theme.colors.shape};
    
    font-size: 16px;
    font-family: ${theme.fonts.primary_400};
  `}
`;
