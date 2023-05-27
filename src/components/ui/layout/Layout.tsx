import { FC, ReactNode } from "react";
import { LayoutWrap } from "./layout.s";
import { Header } from "./components";

interface IAppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutWrap>
        <Header />
        {children}
      </LayoutWrap>
    </>
  );
};
