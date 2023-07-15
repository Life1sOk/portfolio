import React, { Suspense, lazy, useRef, useState, useTransition, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import OutletWrapper from "./layouts/outlet-wrapper";
import Navbar from "../sections/navbar";
import LoadingAnim from "../components/loading-anim/loading-anim.component";

const HomePage = lazy(() => import("./home/index"));

const Routing = () => {
  const [_, startTransition] = useTransition();
  const [suspended, setSuspended] = useState(false);
  const homePageRef = useRef(null);

  const scrollHandler = (section) => {
    homePageRef.current.scrollToSection(section);
  };

  useEffect(() => {
    setTimeout(() => startTransition(() => setSuspended(true)), 2500);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <OutletWrapper>
            {suspended ? <Navbar scrollHandler={scrollHandler} /> : null}
          </OutletWrapper>
        }
      >
        <Route
          index
          element={
            <Suspense>
              {suspended ? <HomePage ref={homePageRef} /> : <LoadingAnim />}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;
