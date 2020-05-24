import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 20px 10px;
`;

export const CheckinButton = styled(RectButton)`
  height: 40px;
  padding: 10px;
  background: #ee4e64;
  border-radius: 4px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const CheckinButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ListWrapper = styled.View``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;
