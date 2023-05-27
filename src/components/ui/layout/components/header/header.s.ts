import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 12px 0;

  background: #333333;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
export const BrandImage = styled.img`
  height: 36px;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
export const UserImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4px;
  width: 48px;
  height: 48px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #fd648e 0deg,
    #884cb2 178.12deg,
    #fd648e 360deg
  );
  backdrop-filter: blur(15px);
  border-radius: 50%;
`;

export const UserImage = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
