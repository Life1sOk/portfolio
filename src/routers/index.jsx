import React, { Suspense, lazy, useRef } from "react";

import { Routes, Route } from "react-router-dom";

import OutletWrapper from './layouts/outlet-wrapper';
import Navbar from "../sections/navbar";

const HomePage = lazy(() => import("./home/index"));

const Routing = () => {
    const homePageRef = useRef(null);

    const scrollHandler = (section) => {
        homePageRef.current.scrollToSection(section);
    };

    return (
        <Routes>
            <Route path='/' element={
                <OutletWrapper>
                    <Navbar scrollHandler={scrollHandler} />
                </OutletWrapper>
            }>
                <Route index element={
                    <Suspense>
                        <HomePage ref={homePageRef} />
                    </Suspense>
                } />
            </Route>
        </Routes>
    );
}

export default Routing;
