import React from 'react';

import { Container, Empty, NotFoundText } from './styles';

const NoItemsViewSlot = ({ text }) => {
  // return <Container>Lista vazia</Container>;
  return (
    <Container>
      <Empty />
      <NotFoundText>{text}</NotFoundText>
    </Container>
  );
};

export default NoItemsViewSlot;
