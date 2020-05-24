import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 5px;
`;

export const CheckinText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const CheckinDate = styled.Text`
  font-size: 12px;
  color: #666;
`;
