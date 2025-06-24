import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quote from "./componets/Quote";
import HealthTip from "./componets/HealthTip";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/quote" element={<Quote />} />
      <Route path="/healthtip" element={<HealthTip />} />
    </Routes>
  );
};

export default AppRouter;
