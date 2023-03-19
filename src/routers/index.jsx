import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "../sections/navbar";
import ContactIcons from "../components/contact-icons/contact.icons.component";
import Copyright from "../components/copyright/copyright.component";

const HomePage = lazy(() => import("./home/index"));

const Routing = () => {

    return (
        <Routes>
            <Route path='/' element={[<Navbar key='navbar' />, <ContactIcons key='aside' />, <Copyright key='copyright' />]}>
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
