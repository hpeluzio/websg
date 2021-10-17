import styled from 'styled-components';

import { colors, constants } from 'src/styles';
import EmptyGif from 'src/assets/empty_white.gif';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${colors.white};
`;

export const NotFoundText = styled.h5`
  color: ${colors.mediumGray};
  background: ${colors.white};
`;

export const Empty = styled.img.attrs({
  src: EmptyGif,
})`
  height: 8rem;
  /* background-color: blue; */
`;
