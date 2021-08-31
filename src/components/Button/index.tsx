import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode;
  title: string;
  color?: string;
  onPress: () => void;
}

import * as S from './styles';

const Button = ({title, color = '', children, ...rest}: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
