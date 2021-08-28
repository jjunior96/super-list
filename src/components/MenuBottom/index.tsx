import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

interface MenuBottomProps {
  navigation: CompositeNavigationProp;
}

import * as S from './styles';

const MenuBottom: React.FC<MenuBottomProps> = ({navigation}) => {
  return (
    <S.Container>
      <S.ItemContainer onPress={() => navigation.navigate('List')}>
        <Icon name="list" size={38} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Total (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>

      <S.AddButton onPress={() => navigation.navigate('AddItem')}>
        <Icon name="plus" size={38} color="#fff" />
      </S.AddButton>

      <S.ItemContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={32} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Carrinho (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>
    </S.Container>
  );
};

export default MenuBottom;
