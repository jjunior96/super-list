import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    
    align-items: center;

    /* padding: 0 24px; */

    background-color: ${theme.colors.background};
  `}
`;

// export const Content = styled.ScrollView.attrs({
//   contentContainerStyle: {
//     padding: 24,
//     alignItems: 'center',
//   },
//   showsVerticalScrollIndicator: false
// })`
//   width: 100%;
// `;

export const Content = styled.FlatList`
  ${({ theme }) => css`
    width: 100%;

    padding: 0 ${RFValue(24)}px;

    background-color: ${theme.colors.primary};
  `}
`;