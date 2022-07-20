import { DefaultLayout, LayoutBanner } from "~/layouts/DefaultLayout";
import Detail from "~/pages/Detail";
import Home from "~/pages/Home";
import Products from "~/pages/Products";
import Search from "~/pages/Search";

import routes from '~/config/routes'

const privateRoutes = []

const publicRoutes = [
    {
        path: routes.products+':slug',
        element: Detail,
        layout: DefaultLayout
    },
    {
        path: routes.products,
        element: Products,
        layout: DefaultLayout
    },
    {
        path: routes.search,
        element: Search,
        layout: null
    },
    {
        path: routes.home,
        element: Home,
        layout: LayoutBanner
    }
]

export {privateRoutes, publicRoutes} 

