import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode;
  color?: string;
  onPress?: () => void;
}

const Button = ({
  color = '', children, ...rest
}: ButtonProps) => (
  <S.Container {...rest}>
    <S.ButtonText>{children}</S.ButtonText>
  </S.Container>
);

export default Button;
