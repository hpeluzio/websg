import styled from 'styled-components';

import { colors } from 'src/styles';

import Spinner from 'src/assets/spinner.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-style: solid;
  border-color: ${colors.lightGray};
  border-radius: 2rem;
  padding: 0.5rem;
  border-width: 0.1rem;
  margin: 1rem;
  padding: 1rem;
  background: ${colors.white};
  /* background: blue; */
`;

export const RaffleContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${colors.lightGray};
  background: ${colors.white};
`;

export const ColumnEditForm = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 16rem;
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-color: ${colors.lightGray};
  padding: 0.5rem;
  border-width: 0.1rem;
  border-radius: 0.5rem;
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

export const RowButton = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${colors.lightGray};
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  padding: 0.5rem;
  /* background: red; */
`;

export const CancelButton = styled.button`
  margin: 0.05rem;
  padding: 1rem;
  height: 3.5rem;
  width: 7rem;
  border: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.35rem;
  font-weight: bold;
  margin-right: 3rem;
  color: ${colors.white};
  background: tomato;
`;

export const SaveButton = styled.button`
  margin: 0.05rem;
  padding: 1rem;
  height: 3.5rem;
  width: 7rem;
  border: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.35rem;
  font-weight: bold;
  color: ${colors.white};
  background: ${colors.primary};
`;

export const NumberInput = styled.input`
  margin: 0.05rem;
  padding: 1rem;
  height: 3.5rem;
  width: 4.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
  margin-right: 0.25rem;
  color: ${colors.primary};
  border-radius: 0.35rem;
  border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 0.1rem;
  background: ${colors.white};
`;

export const Loader = styled.img.attrs({
  src: Spinner,
})`
  height: 6rem;
  /* background-color: blue; */
`;
