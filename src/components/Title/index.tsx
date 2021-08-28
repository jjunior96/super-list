import React from 'react';

import * as S from './styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({text}) => {
  return <S.Title>{text}</S.Title>;
};

export default Title;
