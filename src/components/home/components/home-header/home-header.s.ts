import styled from "styled-components";

export const HomeHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 100%;
`;
export const HeaderTopBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  width: 100%;
`;
export const HeaderTopTitle = styled.h1`
  && {
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: var(--white-50);

    span {
      color: var(--purple-500);
    }
  }
`;
export const HeaderTopDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: var(--white-50);
`;
