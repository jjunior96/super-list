import React, {useEffect, useRef} from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InpuValueRef {
  value: string;
}

const Input = ({name, icon, ...rest}: InputProps) => {
  const theme = useTheme();

  return (
    <S.Container placeholderTextColor={theme.colors.text} {...rest} />
  );
};

export default Input;
