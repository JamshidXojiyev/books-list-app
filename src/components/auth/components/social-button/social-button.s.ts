import styled from "styled-components";

export const SocialButtonWrap = styled.button`
  && {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;

    padding: 10px 24px;
    border: 1px solid var(--grey-900);
    border-radius: 4px;

    font-weight: 500;
    font-size: 16px;
    color: var(--grey-900);

    &:hover {
      background: var(--white-500);
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
