import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {publicRoutes} from '~/routes'

import { Fragment } from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {
                        publicRoutes.map((item, index)=>{
                            const Page = item.element
                            const Layout = item.layout || Fragment
                            return <Route key={index} path={item.path} element={<Layout><Page/></Layout>} />
                        })
                    }
                </Routes>
            </Router>
        </div>
    );
}

export default App;
