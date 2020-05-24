import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
`;

export const HelpOrderHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 5px;
`;

export const HelpOrderAnswered = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AnswerText = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  color: ${(props) => (props.answered ? '#42cb59' : '#999')};
`;

export const HelpOrderDate = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const HelpOrderQuestion = styled.Text`
  font-size: 14px;
  color: #666;
  line-height: 26px;
  text-align: left;
`;
