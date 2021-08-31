import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import * as S from './styles';

const AddItem = () => {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header title="Novo Item" />

      <S.Container>
        <S.InputText />
        <S.InputText />
      </S.Container>
      
      <MenuBottom />
    </>
  )
}

export default AddItem;
