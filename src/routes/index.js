import { lazy } from 'react'
import { DefaultLayout, LayoutBanner } from "~/layouts/DefaultLayout";
import routes from '~/config/routes'

const privateRoutes = [
    {
        path: routes.cart,
        element: lazy(() => import('~/pages/Cart')),
        layout: DefaultLayout
    }
]

const publicRoutes = [
    {
        path: routes.products + ':slug',
        element: lazy(() => import('~/pages/Detail')),
        layout: DefaultLayout
    },
    {
        path: routes.products,
        element: lazy(() => import('~/pages/Products')),
        layout: DefaultLayout
    },
    {
        path: routes.home,
        element: lazy(() => import('~/pages/Home')),
        layout: LayoutBanner
    },
    {
        path: routes.login,
        element: lazy(() => import('~/pages/Login')),
        layout: null
    },
    {
        path: routes.register,
        element: lazy(() => import('~/pages/Register')),
        layout: null
    },
]

export { privateRoutes, publicRoutes }

