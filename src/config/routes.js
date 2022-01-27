// Pages
import Home from "../pages/home/home";
import Login from "../pages/login/login";

const routes = [ 
  {
    path: "/",
    component:  Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
];

export default routes;