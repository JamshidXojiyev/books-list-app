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
    path: "/",
    component: Home,
    isPrivate: true,
  },
];

export default routeLinks;
