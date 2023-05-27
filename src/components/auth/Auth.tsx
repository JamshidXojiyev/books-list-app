import { FC, ReactNode } from "react";
import { AuthContent, AuthWrapper } from "./auth.s";

interface IAuthLayoutProps {
  children: ReactNode;
}

export const Auth: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <AuthWrapper>
      <AuthContent>{children}</AuthContent>
    </AuthWrapper>
  );
};
