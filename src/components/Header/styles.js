import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const LogoText = styled.Text`
  color: #ee4e62;
  font-weight: bold;
`;
