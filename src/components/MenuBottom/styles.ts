import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  bottom: 0;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #213c54;
  background-color: #162736;
  height: 100px;
`;

export const ItemContainer = styled(RectButton)`
  width: 120px;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
`;

export const ItemInfo = styled.View`
  margin-left: 8px;
`;

export const QuantityTitle = styled.Text`
  font-size: 14px;
  color: #20c970;
`;

export const QuantityValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #20c970;
`;

export const AddButton = styled(RectButton)`
  width: 64px;
  height: 64px;
  border-radius: 30px;
  background-color: #fa8231;
  align-items: center;
  justify-content: center;
`;
