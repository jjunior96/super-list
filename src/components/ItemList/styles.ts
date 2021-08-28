import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  check?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  background-color: #203449;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.check === true ? 0.4 : 1)};
`;

export const ItemsLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 48px;
  width: 48px;
  background-color: transparent;
  border-radius: 8px;
`;

export const ItemInfo = styled.View`
  margin-left: 12px;
`;

export const ItemName = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Roboto;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Roboto;
`;

export const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border: 2px solid #20c970;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 0 2px;
`;
