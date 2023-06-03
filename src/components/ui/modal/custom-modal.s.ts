import styled from "styled-components";

export const CustomModalWrap = styled.div`
  && {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 64px 24px;
    min-height: 100vh;
    width: 100vw;
    background: rgba(21, 21, 21, 0.48);
  }
`;
export const CustomModalBlock = styled.div<{ w?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  width: ${({ w }) => (w ? w : "430px")};
  padding: 24px 28px;
  background: var(--white-50);
  box-shadow: 0px 4px 32px rgba(51, 51, 51, 0.04);
  border-radius: 12px;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
`;
export const ModalTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--grey-900);
`;
export const ModalCloseBtn = styled.button`
  && {
    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
      path {
        stroke: var(--grey-900);
        strokeWidth: 1.6px;
      }
    }
  }
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
`;
