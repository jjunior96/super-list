import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import MenuBottom from '../../components/MenuBottom';

import { ItemsData } from '../../components/ItemList/data';

import * as S from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handleCart() {
    navigation.navigate('Cart');
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Container>
        <Header title="Extra Forte" />
      
        <S.Content
          data={ItemsData}
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => <ItemList name={item.name} unity={item.unity} price={item.price} image={item.path} onPress={handleCart} />}
        />
      </S.Container>
    </>
  )
}

export default Home;
