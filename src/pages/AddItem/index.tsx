import React, { useState, useCallback } from 'react';
import { 
  Alert,
  StatusBar, 
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { useNavigation } from '@react-navigation/native'

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import AddToCartButton from '../../components/AddToCartButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputControlled from '../../components/InputControlled';
import SelectButton from '../../components/SelectButton';
import SelectUnityButton from '../../components/SelectUnityButton';
import { ItemListProps } from '../../components/ItemList';

import * as S from './styles';

interface FormDataProps {
  name: string;
  price: number;
  quantity: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  price: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Preço obrigatório'),
  quantity: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Quantidade obrigatória'),
})

const AddItem = () => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isOpenSelectModal, setIsOpenSelectModal] = useState(false);
  const [items, setItems] = useState<ItemListProps[]>([]);
  const [unity, setUnity] = useState({
    key: 'unity',
    name: 'Unidade'
  });

  const navigation = useNavigation();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  async function loadItemsList () {
    const dataKey = '@superlist:additemlist';
      
    const response = await AsyncStorage.getItem(dataKey);

    const items = response ? JSON.parse(response) : [];

   setItems(items);
  };

  function handleAddToCart() {
    setIsAddToCart(!isAddToCart);
  }

  function handleOpenSelectModal() {
    setIsOpenSelectModal(true);
  }

  function handleCloseSelectModal() {
    setIsOpenSelectModal(false);
  }

  async function handleSubmitForm(data: FormDataProps) {
    if(unity.name === 'Unidade') {
      return Alert.alert('Selecione uma unidade');
    }
    
    const { name, price, quantity } = data;

    // Procura se na lista ja existe o item que o usuario esta adicionando
    const itemList = items.find(item => item.name === name);

    if(itemList) {
      return Alert.alert('Item já está na lista');
    }

    const newItem = {
      id: String(uuid.v4()),
      name, 
      price, 
      quantity, 
      unity, 
      isAddToCart
    }

    try { 
      const dataKey = '@superlist:additemlist';
      
      const data = await AsyncStorage.getItem(dataKey);
      
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newItem
      ]      

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setIsAddToCart(false);
      setUnity({
        key: 'unity',
        name: 'Unidade'
      });

      reset();

      navigation.navigate('Lista');
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível adicionar');
    }
  }

  useFocusEffect(useCallback(() => {
    loadItemsList();
  }, []));


  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header title="Novo Item" />

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <S.Container>
          <S.Form>
            <S.FieldsForm>
              <InputControlled 
                control={control} 
                name="name" 
                placeholder="Nome"
                autoCapitalize="sentences"
                error={errors.name && errors.name.message}
              />
              
              <InputControlled 
                control={control} 
                name="price" 
                placeholder="Preço" 
                keyboardType="numeric" 
                error={errors.price && errors.price.message}
              />
              
              <InputControlled 
                control={control} 
                name="quantity" 
                placeholder="Quantidade" 
                keyboardType="numeric" 
                error={errors.quantity && errors.quantity.message}
              />

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
      </TouchableWithoutFeedback >
    </>
  )
}

export default AddItem;
