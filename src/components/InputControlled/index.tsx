import React, {useEffect, useRef} from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Input from '../Input';

import * as S from './styles';

interface InputControlledProps extends TextInputProps {
  name: string;
  control: Control;
  error?: string;
  icon?: string;
}

const InputControlled = ({ name, control, icon, error, ...rest }: InputControlledProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      {error && <S.Error>{error}</S.Error>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...rest} 
          />
        )}
        name={name}
      />
    </S.Container>
  );
};

export default InputControlled;
