import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface SelectButtonProps extends TouchableOpacityProps {
  title: string;
}

const SelectButton = ({ title, ...rest }: SelectButtonProps) => {
  return (
    <S.Container activeOpacity={0.7}  {...rest} >
      <S.Title>{title}</S.Title>
      <S.Icon name="chevron-down" />
    </S.Container>
  );
};

export default SelectButton;
