import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import MenuBottom from '../../components/MenuBottom';

import { ItemsData } from '../../components/ItemList/data';

import * as S from './styles';

const Dashboard = () => {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header title="Extra Forte" />

      <S.Container>
        {ItemsData.map((item)=> (
          <ItemList name={item.name} unity={item.unity} price={item.price} image={item.path} />
        ))}
      </S.Container>
      
      <MenuBottom />
    </>
  )
}

export default Dashboard;
