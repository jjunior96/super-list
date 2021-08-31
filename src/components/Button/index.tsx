import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode;
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({title, color = '', children, ...rest}: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
