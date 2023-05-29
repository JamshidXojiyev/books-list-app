import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
`;

export const AuthContent = styled.div`
  padding: 48px 28px;
  width: 430px;
  background: var(--white-50);
  box-shadow: 0px 4px 32px rgba(51, 51, 51, 0.04);
  border-radius: 12px;
`;

export const AuthTitle = styled.h3`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: var(--grey-900);
`;

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
`;
export const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
`;

export const AuthBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;

  margin-top: 20px;
`;
export const AuthLink = styled(Link)`
  && {
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    color: var(--grey-500);
    span {
      color: var(--purple-500);
    }
  }
`;
