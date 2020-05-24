import React from 'react';

import logo from '~/assets/images/gympoint.png';

import { Container, Logo, LogoText } from './styles';

const Header = ({ children: title }) => {
  return (
    <Container>
      <Logo source={logo} />
      <LogoText>{title}</LogoText>
    </Container>
  );
};

export default Header;
