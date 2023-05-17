import React, { Fragment, useContext } from "react";

import Index from "./Views/AdminDashboard/Index";
import Login from "./Views/Auth/Login";

import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import SignUp from "./Views/Auth/SignUp";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import Hospitals from "./Views/AdminDashboard/Hospitals/Hospitals";
import HospitalDetails from "./Views/AdminDashboard/Hospitals/HospitalDetails";

function AllRoutes() {
  const isAuthenticated = true;

  function RequireAuth() {
    let location = useLocation();
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return <Outlet />;
  }

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/admin/hospitals" element={<Hospitals />} />
        <Route exact path="/admin/hospital/:id" element={<HospitalDetails />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default AllRoutes;
