import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';


import * as S from './styles';

export interface ItemListProps extends RectButtonProps {
  check?: boolean;
  name: string;
  quantity: number;
  unity: {
    color: string;
    key: string;
    name: string;
  },
  price: string;
  image?: ImageSourcePropType;
  isAddToCart: boolean;
  // onPress?: (id: string) => void;
}

interface Props {
  data: ItemListProps
}

const ItemList = ({ data, ...rest }: Props) => (
  <S.Container check={data.check} {...rest} >
    <S.ItemsLeft>
      {/* <S.ItemImage source={data.image} resizeMode="contain" /> */}
      <S.ItemInfo>
        <S.ItemName>{data.name}</S.ItemName>
        <S.ItemDescription>
          {data.quantity}
          {data.unity}
          {' '}
          - R$
          {' '}
          {data.price}
        </S.ItemDescription>
      </S.ItemInfo>
    </S.ItemsLeft>

    {data.check === true ? (
      <AntDesign name="checkcircleo" size={20} color="#20c970" />
    ) : (
      <MaterialIcons name="radio-button-unchecked" size={24} color="#20c970" />
    )}
  </S.Container>
);

export default ItemList;
