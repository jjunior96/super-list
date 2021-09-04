import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { DataListProps } from '../Home';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    
    align-items: center;

    /* padding: 0 24px; */

    background-color: ${theme.colors.background};

    `}
    `;

export const ListContainer = styled(FlatList as new() => FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${RFValue(24)}px;
    padding: 0 ${RFValue(24)}px;

    background-color: ${theme.colors.primary};
  `}
`;