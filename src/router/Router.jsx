import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import AreaDistribution from "../pages/area-distribution/AreaDistribution";

const Router = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/area-distribution" element={<AreaDistribution />}></Route>

        </Routes>
    );
};

export default Router;