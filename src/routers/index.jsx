import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import OutletWrapper from './layouts/outlet-wrapper';
import Navbar from "../sections/navbar";

const HomePage = lazy(() => import("./home/index"));

const Routing = () => {

    return (
        <Routes>
            <Route path='/' element={<OutletWrapper><Navbar /></OutletWrapper>}>
                <Route index element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                } />
            </Route>
        </Routes>
    );
}

export default Routing;
