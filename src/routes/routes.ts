import { Home, SignIn, SignUp } from "../components";
import { RouteLinkProps } from "../interfaces/global-interface";

const routeLinks: RouteLinkProps[] = [
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    component: Home,
    index: true,
    isPrivate: true,
  },
];

export default routeLinks;
