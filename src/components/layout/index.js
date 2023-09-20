import React from "react";
import {Outlet} from "react-router-dom";
import {Nav} from "../header";
import {HomePage} from "../../pages/home";
export const Layout = () => {
    return (<div className="layout-container">
        <Nav/>
        <HomePage/>
        <Outlet/>
    </div>);
};
