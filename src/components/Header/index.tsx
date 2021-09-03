import React from 'react';

import * as S from './styles';

interface HeaderProps {
  title: string;
  totalPrice?: string;
}

const Header = ({ title, totalPrice }: HeaderProps) => (
  <S.Container>
    <S.Content>{title}</S.Content>
    {totalPrice && <S.TotalPrice>Total: {totalPrice}</S.TotalPrice>}
  </S.Container>
);

export default Header;
