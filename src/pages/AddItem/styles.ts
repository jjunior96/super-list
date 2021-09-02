import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    
    align-items: center;

    background-color: ${theme.colors.background};

    padding: 0 ${RFValue(24)}px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false
})`
  width: 100%;
`;

export const InputText = styled.TextInput`
  width: 100%;
`;

export const LineInput = styled.View`
  width: 100%;

  flex-direction: row;
`;


export const Form = styled.View`
  width: 100%;

  flex: 1;

  padding: 0 0 ${RFValue(24)}px;
`;

export const FieldsForm = styled.View`
  width: 100%;

  flex: 1;
`;