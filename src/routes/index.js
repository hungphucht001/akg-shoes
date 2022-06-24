import { DefaultLayout, LayoutBanner } from "~/components/DefaultLayout";
import Detail from "~/pages/Detail";
import Home from "~/pages/Home";
import Products from "~/pages/Products";
import Search from "~/pages/Search";

const privateRoutes = []

const publicRoutes = [
    {
        path: '/products',
        element: Products,
        layout: DefaultLayout
    },
    {
        path: '/detail',
        element: Detail,
        layout: DefaultLayout
    },
    {
        path: '/search',
        element: Search,
        layout: null
    },
    {
        path: '/',
        element: Home,
        layout: LayoutBanner
    }
]

export {privateRoutes, publicRoutes} 

