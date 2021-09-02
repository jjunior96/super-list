import React, {useEffect, useRef} from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Input from '../Input';

import * as S from './styles';

interface InputControlledProps extends TextInputProps {
  name: string;
  icon?: string;
  control: Control;
}

const InputControlled = ({ control, name, icon, ...rest }: InputControlledProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholderTextColor={theme.colors.text}
            {...rest} 
          />
        )}
        name={name}
      />
    </S.Container>
  );
};

export default InputControlled;
