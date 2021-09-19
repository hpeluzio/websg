import styled from 'styled-components';

import { colors } from 'src/styles';
import Spinner from 'src/assets/spinner.svg';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10000;
  /* justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.1);
  /* height: 20rem;
  width: 20rem; */
  /* display: flex;
  flex-direction: column;
  background: ${colors.white};
  border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 0.1rem; */
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  background-color: red;
  background-color: rgba(0, 0, 0, 0);
`;

export const Loader = styled.img.attrs({
  src: Spinner,
})`
  height: 10%;
`;
