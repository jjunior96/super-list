import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { ItemsData } from './data';

import * as S from './styles';
import { ImageSourcePropType } from 'react-native';

interface ItemListProps {
  check?: boolean;
  name: string;
  unity: string;
  price: string;
  image: ImageSourcePropType;
}

const ItemList = ({ name, unity, price, image, check }: ItemListProps) => {
  return (
    <S.Container check={check}>
      <S.ItemsLeft>
        <S.ItemImage source={image} />
        <S.ItemInfo>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemDescription>
            2 {unity} - R$ {price}
          </S.ItemDescription>
        </S.ItemInfo>
      </S.ItemsLeft>

      <S.ItemCheck>
        <AntDesign name="checkcircleo" size={18} color="#20c970" />
      </S.ItemCheck>
    </S.Container>
  );
};

export default ItemList;
