import ErrorPage from "../RouteComponent/ErrorPage";
import HomePage from "../RouteComponent/HomePage";

const routes:{path:string,component:React.ReactNode}[] = [
    {
        path:"/",
        component:<HomePage/>
    },
    {
        path:"*",
        component:<ErrorPage/>
    }
]
export default routes;