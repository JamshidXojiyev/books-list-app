import { Dashboard, SignIn, SignUp } from "../components";
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
    component: Dashboard,
    isPrivate: true,
  },
];

export default routeLinks;
