import React, { Suspense } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { Footer, Header, Loading } from "./components";
import { Home, NotFound } from "./views";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Router>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
