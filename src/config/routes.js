// Pages
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import redirectComponent from "../components/redirect/redirect";

const routes = [ 
  {
    path: "/",
    component:  redirectComponent,
    exact: true,
  },
  {
    path: "/home",
    component:  Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/register",
    component: Register,
    exact: false,
  },
];

export default routes;