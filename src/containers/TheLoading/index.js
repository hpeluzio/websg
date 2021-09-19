import React from 'react';

import { Container, LoaderContainer, Loader } from './styles';
import Spinner from 'src/assets/spinner.svg';

const TheLoading = () => {
  return (
    <Container>
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </Container>
  );
};

export default TheLoading;
