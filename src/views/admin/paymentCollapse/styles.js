import styled from 'styled-components';

import { colors } from 'src/styles';

import Spinner from 'src/assets/spinner.svg';

export const Container = styled.div`
  /* height: 20rem;
  width: 20rem; */
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: ${colors.lightGray};
  padding: 0.2rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  margin: 0.5rem;
  background: ${colors.white};
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
  /* padding: 0.25rem; */
  /* border-width: 0.1rem;
  border-radius: 0.5rem; */
  background: ${colors.white};
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
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
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
  color: ${props => props.color};
  background: ${colors.lightGray};
`;

export const TextStatus = styled.div`
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
  /* font-weight: bold; */
  color: ${props => props.color};
  background: ${colors.lightGray};
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 16rem;
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Loader = styled.img.attrs({
  src: Spinner,
})`
  height: 6rem;
  /* background-color: blue; */
`;
