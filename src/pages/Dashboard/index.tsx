import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';

import * as S from './styles';

const Dashboard = () => {
  return (
    <S.Container>
      <Header />
      <Button>
        Texto
      </Button>
    </S.Container>
  )
}

export default Dashboard;
