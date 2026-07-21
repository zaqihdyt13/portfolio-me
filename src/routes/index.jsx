import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home";
import { Redirect } from "../views/redirect/Redirect";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/redirect" element={<Redirect />} />
    </Routes>
  );
};
