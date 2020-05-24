import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const SubmitButton = styled(RectButton)`
  background: #ee4d64;
  border: 0;
  border-radius: 4px;
  padding: 16px;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`;
