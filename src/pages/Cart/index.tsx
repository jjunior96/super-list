import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import * as S from './styles';

const Cart = () => {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header title="Extra Forte" />

      <S.Container>
        
      </S.Container>
    </>
  )
}

export default Cart;
