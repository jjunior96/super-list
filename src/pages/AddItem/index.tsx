import React, { useState } from 'react';
import { StatusBar, Modal, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';

import AddToCartButton from '../../components/AddToCartButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputControlled from '../../components/InputControlled';
import SelectButton from '../../components/SelectButton';
import SelectUnityButton from '../../components/SelectUnityButton';

import * as S from './styles';

interface FormDataProps {
  name: string;
  price: number;
  quantity: number;
}

const AddItem = () => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isOpenSelectModal, setIsOpenSelectModal] = useState(false);

  const { control, handleSubmit } = useForm();
  
  const [unity, setUnity] = useState({
    key: 'unity',
    name: 'Unidade'
  });

  function handleAddToCart() {
    setIsAddToCart(!isAddToCart);
  }

  function handleOpenSelectModal() {
    setIsOpenSelectModal(true);
  }

  function handleCloseSelectModal() {
    setIsOpenSelectModal(false);
  }

  function handleSubmitForm(form: FormDataProps) {
    const { name, price, quantity } = form;

    const data = {
      name, 
      price, 
      quantity, 
      unity, 
      isAddToCart
    }

    console.log(data);
  }


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
          <InputControlled control={control} name="name" placeholder="Nome" />
          
          <InputControlled control={control} name="price" placeholder="Preço" keyboardType="numeric" />
          
          <InputControlled control={control} name="quantity" placeholder="Quantidade" keyboardType="numeric" />

          <SelectButton title={unity.name} onPress={handleOpenSelectModal} />

          <AddToCartButton title="Add ao carrinho" isChecked={isAddToCart} onPress={handleAddToCart} />
         </S.FieldsForm>

          <Button
            onPress={handleSubmit(handleSubmitForm)}
          >
            Adicionar
          </Button>
       </S.Form>

       <Modal visible={isOpenSelectModal} >
        <SelectUnityButton 
          unity={unity}
          setUnity={setUnity}
          closeSelectUnity={handleCloseSelectModal}
        />  
       </Modal>
      </S.Container>
    </>
  )
}

export default AddItem;
