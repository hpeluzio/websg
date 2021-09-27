import styled from 'styled-components';

import { colors, constants } from 'src/styles';
import TrevoLogo from 'src/assets/trevo.svg';

export const Container = styled.div`
  /* height: 20rem;
  width: 20rem; */
  display: flex;
  flex-direction: column;
  /* border-style: solid; */
  /* border-color: ${colors.lightGray}; */
  /* border-width: 0.1rem; */
  padding: 1rem;
  background: ${colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  display: flex;
  background: ${colors.white};
  /* border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 0.1rem; */
`;
