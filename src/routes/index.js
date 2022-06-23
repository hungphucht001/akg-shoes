import DefaultLayout from "~/components/DefaultLayout";
import Home from "~/pages/Home";

const privateRoutes = []

const publicRoutes = [
    {
        path: '/',
        element: Home,
        layout: DefaultLayout
    }
]

export {privateRoutes, publicRoutes} 

