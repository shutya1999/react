import "./scss/app.scss";
import React, { Suspense } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { Routes, Route } from "react-router-dom";

const Cart = React.lazy(() =>
    import(/* webpackChunkName: 'Cart' */ "./pages/Cart")
);
const NotFound = React.lazy(() =>
    import(/* webpackChunkName: 'NotFound' */ "./pages/NotFound")
);

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cart"
                        element={
                            <Suspense fallback={<div>Завантаження...</div>}>
                                <Cart />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Завантаження...</div>}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
