import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;

    background-color: ${theme.colors.item};

    border-radius: 12px;

    padding: 0 ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};

    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.shape};

    font-size: ${RFValue(16)}px;
  `}
`;

