import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

interface MenuBottomProps {
  // navigation: CompositeNavigationProp;
  navigation?: any;
}

import * as S from './styles';
import Button from '../Button';

const MenuBottom = () => {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('Home');
  }

  function handleCart() {
    navigation.navigate('Cart');
  }


  function handleAddItem() {
    navigation.navigate('AddItem');
  }

  return (
    <S.Container>
      <S.ItemContainer onPress={handleHome}>
        <FontAwesome name="list-ul" size={38} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Total (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>

      {/* <S.AddButton onPress={() => navigation.navigate('AddItem')}>
        <FontAwesome name="plus" size={38} color="#fff" />
      </S.AddButton> */}
        <S.AddButton>
          <Button title="Add" onPress={handleAddItem}>
            <FontAwesome name="plus" size={38} color="#fff" />
          </Button>

        </S.AddButton>

      <S.ItemContainer onPress={handleCart}>
        <FontAwesome name="shopping-cart" size={32} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Carrinho (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>
    </S.Container>
  );
};

export default MenuBottom;
