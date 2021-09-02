import React from 'react';

import * as S from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <S.Container>
    <S.Content>{title}</S.Content>
  </S.Container>
);

export default Header;
