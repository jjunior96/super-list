import React from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';

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
       <S.Form>
         <S.FieldsForm>
          <Input name="nome" placeholder="Nome" />
          
          <Input name="price" placeholder="Preço" keyboardType="numeric" />
          
          <Input name="quantity" placeholder="Quantidade" keyboardType="numeric" />
         </S.FieldsForm>

        <Button>Adicionar</Button>
       </S.Form>
      </S.Container>
    </>
  )
}

export default AddItem;
