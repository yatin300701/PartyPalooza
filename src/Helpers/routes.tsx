import ErrorPage from "../RoutePages/ErrorPage";
import HomePage from "../RoutePages/HomePage";
import Cookies from "js-cookie";
import MainPage from "../RoutePages/MainPage";
import ChooseCakePage from "../RoutePages/ChooseCakePage";
import ChooseDecorationPage from "../RoutePages/ChooseDecorationPage";
import ChooseSpeakerPage from "../RoutePages/ChooseSpeakerPage";
import CheckoutPage from "../RoutePages/CheckoutPage";

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
    path: "/cake",
    component: <ChooseCakePage />,
  },
  {
    path: "/decoration",
    component: <ChooseDecorationPage />,
  },
  {
    path: "/speakers",
    component: <ChooseSpeakerPage />,
  },
  {
    path: "/checkout",
    component: <CheckoutPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
export default routes;
