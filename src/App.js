import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";

import "./assets/css/bootstrap.css";

import "./assets/css/style.css";
import "./assets/css/color-1.css";
import "./assets/css/responsive.css";
import "./assets/css/themify.css";
import "./assets/css/custom.css";

//load user on page load
// useEffect(() => {
// store.dispatch(loadUser());
// }, []);

const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
};
export default App;
