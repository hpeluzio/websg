import styled from 'styled-components';

import { colors } from 'src/styles';

export const Container = styled.div`
  /* height: 20rem;
  width: 20rem; */
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 0.1rem;
`;

export const Container2 = styled.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  background: ${colors.white};
  border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 0.1rem;
`;
