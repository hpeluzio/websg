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

export const Column1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.mediumGray};
  /* background: orange; */
`;

export const Welcome = styled.div`
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  color: ${colors.mediumGray};
  text-align: center;
  /* background: orange; */
`;

export const Contact = styled.div`
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  color: ${colors.mediumGray};
  /* text-align: center; */
  /* background: orange; */
`;

export const Column2 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  /* background: orange; */
`;

export const LogoImage = styled.img.attrs({
  src: `${TrevoLogo}`,
})`
  width: 10rem;
  height: 10rem;
`;
