import styled from "styled-components";

export const BooksListWrap = styled.div`
  && {
    width: 100%;

    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
    -moz-column-gap: 10px;
    -webkit-column-gap: 10px;
    column-gap: 24px;
  }
`;

// books item styles
export const BooksItemEffectWrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: inline-block;
`;
export const BooksItemWrap = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    padding: 32px;
    background: var(--white-50);
    border: 1px solid var(--grey-50);
    box-shadow: 0px 4px 24px rgba(51, 51, 51, 0.08);
    border-radius: 12px;
  }
`;
export const BooksTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: var(--grey-900);
`;
export const BooksDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: var(--grey-500);
`;
export const BooksItemTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  width: 100%;
`;
export const BooksItemBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 100%;
`;
export const BooksAuthor = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: var(--grey-500);
`;
export const BooksPages = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  padding: 2px 12px;
  background: var(--purple-50);
  border-radius: 8px;

  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--purple-300);
`;
