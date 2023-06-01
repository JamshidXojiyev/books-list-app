import styled from "styled-components";

export const CustomSkeleton = styled.div<{
  w?: string;
  h?: string;
}>`
  && {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.6s shine linear infinite;

    width: ${({ w }) => (w ? w : "100%")};
    height: ${({ h }) => (h ? h : "20px")};
    border-radius: 6px;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  }
`;
