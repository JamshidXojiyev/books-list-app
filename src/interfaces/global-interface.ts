import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export type ComponentProps = FC<Props>;

export interface RouteLinkProps {
  path?: string;
  component: FC<any>;
  index?: boolean;
  isPrivate?: boolean;
  children?: RouteLinkProps[];
}
