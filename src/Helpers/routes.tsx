import ErrorPage from "../RoutePages/ErrorPage";
import HomePage from "../RoutePages/HomePage";
import Cookies from "js-cookie";
import MainPage from "../RoutePages/MainPage";

Cookies.set("name", "value");

const homePage = 4 == 4 ? <HomePage /> : "";

const routes: { path: string; component: React.ReactNode }[] = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/home",
    component: <MainPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
export default routes;
