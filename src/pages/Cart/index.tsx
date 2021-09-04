import React, { useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { DataListProps } from '../Home';

import * as S from './styles';
import ItemList from '../../components/ItemList';

const Cart = () => {
  const [data, setData] = useState<DataListProps[]>();
  const [totalPrice, setTotalPrice] = useState('0');

  const loadItemsList = useCallback(async () => {
    const dataKey = '@superlist:additemlist';
      
    const response = await AsyncStorage.getItem(dataKey);

    const items = response ? JSON.parse(response) : [];

    const itemsFormatted = items.map((item: DataListProps) => {
      const price = Number(item.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      return {
        id: item.id,
        name: item.name,
        price,
        quantity: item.quantity,
        unity: item.unity.name,
        image: item.image,
        check: item.isAddToCart
      }
  });
    
    setData(itemsFormatted);
  }, []);

  const handleCheckItem = useCallback((index) => {
    let itemsList = [...data];

    const newItems = itemsList.map((item) => {
      if(item.id === index) {
        item.check = !item.check;
        
        console.log(item);
        return item;
      }

    });

    console.log(newItems);
    
    // setData(newItems[1]);
  }, []);

  async function calculateTotalPrice() {
    const dataKey = '@superlist:additemlist';
    const response = await AsyncStorage.getItem(dataKey);
    const items = response ? JSON.parse(response) : [];

    const prices: number = items.reduce(function(total: number, item: DataListProps) {
      return total + Number(item.price) * Number(item.quantity);
    }, 0);

    const totalPrice = Number(prices).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    setTotalPrice(totalPrice);
  }

  useEffect(() => {
    loadItemsList();
  }, []);
  
  useFocusEffect(useCallback(() => {
    loadItemsList();
  }, []));

  useFocusEffect(useCallback(() => {
    calculateTotalPrice();
  }, []));

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header title="Carrinho" totalPrice={totalPrice} />

      <S.Container>
        <S.ListContainer
          data={data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <ItemList data={item} onPress={() => handleCheckItem(item.id)} />}
        />
      </S.Container>
    </>
  )
}

export default Cart;
