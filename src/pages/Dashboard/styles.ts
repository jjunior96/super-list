import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    
    align-items: center;

    padding: 0 24px;

    background-color: ${theme.colors.background};
  `}
`;