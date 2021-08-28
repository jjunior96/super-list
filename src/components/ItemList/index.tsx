import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Items} from './Items';

import * as S from './styles';

interface ItemListProps {
  check?: boolean;
}

const ItemList: React.FC<ItemListProps> = ({check}) => {
  return (
    <S.Container check={check}>
      <S.ItemsLeft>
        <S.ItemImage source={Items[0].path} />
        <S.ItemInfo>
          <S.ItemName>{Items[0].name}</S.ItemName>
          <S.ItemDescription>
            2 {Items[0].unity} - R$ {Items[0].price}
          </S.ItemDescription>
        </S.ItemInfo>
      </S.ItemsLeft>

      <S.ItemCheck>
        <Icon name="check" size={18} color="#20c970" />
      </S.ItemCheck>
    </S.Container>
  );
};

export default ItemList;
