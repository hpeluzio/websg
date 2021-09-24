import React from 'react';
import {} from '@coreui/react';

import {
  Container,
  Content,
  Column1,
  Column2,
  LogoImage,
  Welcome,
  Contact,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <Column1>
          <Welcome>Sejam bem vindos ao Bolão da Sorte!</Welcome>
          <Contact>Contato: contato@bolaodasorte.online</Contact>
          <Contact>ou bolaodasorteonline@gmail.com</Contact>
        </Column1>
        <Column2>
          <LogoImage />
        </Column2>
      </Content>
    </Container>
  );
};

export default Home;
