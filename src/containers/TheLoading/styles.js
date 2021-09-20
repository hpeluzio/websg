import styled from 'styled-components';

import { colors } from 'src/styles';
import Spinner from 'src/assets/spinner.svg';

export const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Loader = styled.img.attrs({
  src: Spinner,
})`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
  height: 10rem;
  background-color: blue;
`;
