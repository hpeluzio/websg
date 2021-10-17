import styled, { keyframes } from 'styled-components';

const moveGradient = keyframes`
 0% { background-position: 0% 0% }
 100% { background-position: -200% 0% }
`;

export const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 10000;
  height: 0.6rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;

export const Animation = styled.div`
  height: 0.5rem;
  width: 100%px;
  /* border-radius: 3px; */
  background: linear-gradient(
    90deg,
    red 0%,
    yellow 15%,
    lime 30%,
    cyan 50%,
    blue 65%,
    magenta 80%,
    red 100%
  );
  background-size: 200%;
  animation: ${moveGradient} 5s linear infinite;
`;

// const breatheAnimation = keyframes`
//  0% { height: 1rem; width: 25%; opacity: 0.4; background-color: orange;}
//  30% { height: 1rem; width: 50%; opacity: 0.5; background-color: red; }
//  40% { height: 1rem; width: 75%; opacity: 0.6; background-color: blue; }
//  100% { height: 1rem; width: 100%; opacity: 0.75; background-color: green;}
// `;

// export const Container2 = styled.div`
//   position: absolute;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   text-align: center;
//   height: 1rem;
//   width: 100%;
//   z-index: 10000;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.2);
//   background-color: green;
//   animation-name: ${breatheAnimation};
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
// `;

// export const Loader = styled.img.attrs({
//   src: Spinner,
// })`
//   position: absolute;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   top: 35%;
//   transform: translateY(-50%);
//   height: 10rem;
//   /* background-color: blue; */
// `;
