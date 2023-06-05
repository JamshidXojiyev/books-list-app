import styled from "styled-components";

export const BackgroundEffect = styled.img`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: clamp(320px, 70vw, 1600px);
  height: 100vh;
  z-index: -2;
  object-fit: cover;
  object-position: top right;
`;
