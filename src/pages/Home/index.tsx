import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import ItemList, { ItemListProps } from '../../components/ItemList';

import * as S from './styles';

export interface DataListProps extends ItemListProps {
  id: string;
}

const Home = () => {
  const [data, setData] = useState<DataListProps[]>([]);
  const [isChecked, setIsChecked] = useState(false);
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
      <S.Container>
        <Header title="Lista" totalPrice={totalPrice} />
      
        <S.ListContainer
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemList data={item} />}
        />
      </S.Container>
    </>
  )
}

export default Home;
