import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components';
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
}

interface Props {
  data: ItemListProps
  onPress?: () => void;
}

const ItemList = ({ data, ...rest }: Props) => {
  const theme = useTheme();

  return (
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

      <S.CheckContainer onPress={data.onPress} >
        {data.check === true ? (
          <AntDesign name="checkcircleo" size={20} color={theme.colors.sucess} />
          ) : (
         <MaterialIcons name="radio-button-unchecked" size={24} color={theme.colors.sucess} />
        )}
      </S.CheckContainer>
    </S.Container>
  )
};

export default ItemList;
