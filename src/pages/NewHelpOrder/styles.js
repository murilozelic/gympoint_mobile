import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  padding: 20px 30px;
`;

export const SubmitButton = styled(RectButton)`
  background: #ee4d64;
  border: 0;
  border-radius: 4px;
  padding: 16px;
  align-items: center;
`;

export const HelpOrderForm = styled(Form)``;

export const SubmitButtonText = styled.Text``;
