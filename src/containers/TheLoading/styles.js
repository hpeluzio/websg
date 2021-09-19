import styled from 'styled-components';

import { colors } from 'src/styles';

export const Container = styled.div`
  position: absolute;
  height: 100rem;
  width: 100rem;
  z-index: 10000;
  justify-content: center;
  align-items: center;
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

export const Text = styled.div`
  /* position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto; */
  color: ${colors.white};
`;
