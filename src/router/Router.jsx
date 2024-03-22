import React from "react";
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack'

import Home from "../pages/home/Home";
import AreaDistribution from "../pages/area-distribution/AreaDistribution";
import DetailArea from "../pages/area-distribution/DetailArea";
import DataTest from "../pages/data-test/DataTest";

const Router = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/area-distribution" element={<AreaDistribution />}></Route>
                <Route path="/area-distribution/detail" element={<DetailArea />}>
                    <Route path=":cityId" element={<DetailArea />}></Route>
                </Route>
                <Route path="/data-test" element={<DataTest />}></Route>

            </Routes>
        </SnackbarProvider>
    );
};

export default Router;