import styled from 'styled-components';

import { colors } from 'src/styles';

export const Container = styled.div`
  /* height: 20rem;
  width: 20rem; */
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: ${colors.lightGray};
  background: ${colors.white};
  padding: 0.5rem;
  border-width: 0.1rem;
`;

export const RaffleContent = styled.div`
  /* height: 20rem;
  width: 20rem; */
  display: flex;
  flex-direction: column;
  /* border-style: solid; */
  /* border-color: ${colors.lightGray}; */
  background: ${colors.white};
  /* padding: 0.5rem; */
  /* border-width: 0.1rem; */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${colors.lightGray};
  background: ${colors.white};
  /* padding: 0.25rem; */
  /* border-width: 0.1rem;
  border-radius: 0.5rem; */
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  padding: 0.1rem;
`;

export const Column2 = styled.div`
  display: flex;
  flex: 4;
  padding: 0.1rem;
`;

export const Text = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  border-style: solid;
  border-color: ${colors.lightGray};
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  background: ${colors.lightGray};
`;

export const Text2 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  border-style: solid;
  border-color: ${colors.lightGray};
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  /* font-weight: bold; */
  background: ${colors.lightGray};
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 12rem;
  /* flex-direction: row; */
  /* align-self: stretch; */
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-color: ${colors.lightGray};
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  /* font-weight: bold; */
  background: ${colors.lightGray};
`;

export const Number = styled.div`
  display: flex;
  margin: 0.05rem;
  height: 1.3rem;
  width: 1.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.35rem;
  font-weight: bold;
  color: ${colors.mediumGray};
  background: ${colors.white};
`;
