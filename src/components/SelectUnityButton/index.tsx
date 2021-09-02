import React from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { unityCategories } from '../../utils/categories';
import Button from '../Button';
import Header from '../Header';

import * as S from './styles';

interface UnityProps {
  key: string;
  name: string;
}

interface SelectUnityButtonProps {
  unity: UnityProps;
  setUnity: (unity: UnityProps) => void;
  closeSelectUnity: () => void;
}

const SelectUnityButton = ({ unity, setUnity,  closeSelectUnity}: SelectUnityButtonProps) => {
  function handleSelectUnity(unity: UnityProps) {
    setUnity(unity);
  }

  return (
    <>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <S.Container>
        
        <Header title="Unidade" />

        <FlatList 
          data={unityCategories}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <S.UnityContainer
              onPress={() => handleSelectUnity(item)}
              isActive={unity.key === item.key}
            >
              <S.UnityName>{item.name}</S.UnityName>
            </S.UnityContainer>
          )}
        />

        <S.Footer>
          <Button  
            onPress={closeSelectUnity}
          >
            Selecionar
          </Button>
        </S.Footer>

      </S.Container>
    </>
  );
};

export default SelectUnityButton;
