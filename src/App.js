import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from '~/routes'

import { Fragment } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Loading from './components/Loading';



function App() {

    return (
        <div>
            <Router >
                <Suspense fallback={<Loading />}>
                    <Routes>
                        {
                            publicRoutes.map((item, index) => {
                                const Page = item.element
                                const Layout = item.layout || Fragment
                                return <Route key={index} path={item.path} element={<Layout><Page /></Layout>} />
                            })


                        }
                        {
                            privateRoutes.map((item, index) => {
                                const Page = item.element
                                const Layout = item.layout || Fragment
                                return <Route key={index} path={item.path} element=
                                    {
                                        <PrivateRoute redirectPath={item.path}>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </PrivateRoute>
                                    }
                                />
                            })
                        }
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
