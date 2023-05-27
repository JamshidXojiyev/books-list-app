import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export type ComponentProps = FC<Props>;

export interface RouteLinkProps {
  path: string;
  component: FC<any>;
  isPrivate?: boolean;
  children?: RouteLinkProps[];
}
