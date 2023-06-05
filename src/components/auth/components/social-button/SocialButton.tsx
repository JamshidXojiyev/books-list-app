import { FC, ReactNode, MouseEventHandler } from "react";
import { SocialButtonWrap } from "./social-button.s";

interface ISocialButtonProps {
  children: ReactNode;
  click?: MouseEventHandler;
}

export const SocialButton: FC<ISocialButtonProps> = ({ children, click }) => {
  return <SocialButtonWrap onClick={click}>{children}</SocialButtonWrap>;
};
