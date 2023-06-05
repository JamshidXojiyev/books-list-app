import styled from "styled-components";

export const SearchInputWrap = styled.div<{ target?: string }>`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    width: 380px;
    max-width: 420px;
    height: 48px;
    border-radius: 6px;

    &:has(.search-input:focus) {
      padding: 0px 26px;
      background: var(--white-50);
      width: 420px;

      input {
        color: var(--grey-900);
        opacity: 1;
      }
      path {
        stroke: var(--grey-900);
      }
    }
    & > span {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
    }
  }
`;
export const SearchInputComponent = styled.input`
  && {
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: 0;

    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: var(--white-50);

    opacity: 0.64;
  }
`;
