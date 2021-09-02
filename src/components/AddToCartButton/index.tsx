import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface AddToCartButtonProps extends TouchableOpacityProps {
  title: string;
  isIcon?: boolean;
  isChecked?: boolean;
}

const AddToCartButton = ({ title, isIcon = true, isChecked, ...rest }: AddToCartButtonProps) => {
  return (
    <S.Container  isChecked={isChecked} activeOpacity= {0.7} {...rest}>
      {isIcon && <S.Icon name="shopping-cart" isChecked={isChecked} />}

      <S.Title isChecked={isChecked} >{title}</S.Title>
    </S.Container>
  );
};

export default AddToCartButton;
