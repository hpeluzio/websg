import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Loader, Empty, NotFoundText } from './styles';

const NoItemsViewSlot = ({ text }) => {
  const loading = useSelector(s => s.layout.loading);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Empty />
          <NotFoundText>{text}</NotFoundText>
        </div>
      )}
    </Container>
  );
};

export default NoItemsViewSlot;
