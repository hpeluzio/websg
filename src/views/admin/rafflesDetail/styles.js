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
  display: flex;
  flex-direction: column;
  background: ${colors.white};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${colors.lightGray};
  background: ${colors.white};
  /* align-items: center;
  justify-content: center; */
  flex-wrap: wrap;
  /* background: red; */
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${colors.lightGray};
  background: ${colors.white};
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: nowrap;
  padding: 0.1rem;
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  height: 3.5rem;
  padding: 0.1rem;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  flex: 3;
  height: 3.5rem;
  padding: 0.1rem;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  display: flex;
  flex: 1;
  /* flex-direction: row; */
  align-items: center;
  /* justify-content: center; */
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
  align-items: center;
  /* justify-content: center; */
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
  color: ${props => (props.hit ? colors.white : colors.mediumGray)};
  background: ${props => (props.hit ? colors.primary : colors.white)};
`;

export const AddButton = styled.button`
  display: flex;
  width: 10rem;
  height: 3.5rem;
  margin: 0.1rem;
  padding: 0.1rem;
  border: 0;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  color: ${colors.white};
  background: ${colors.primary};
`;

export const EditButton = styled.button`
  display: flex;
  width: 10rem;
  height: 3.5rem;
  margin: 0.1rem;
  padding: 0.1rem;
  border: 0;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  color: ${colors.white};
  background: ${colors.secondaryWarning};
`;

export const EditAllButton = styled.button`
  display: flex;
  width: 10rem;
  height: 3.5rem;
  margin: 0.1rem;
  padding: 0.5rem;
  border: 0;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  color: ${colors.white};
  background: ${colors.mediumGray};
`;
