import React from "react";
import {Outlet} from "react-router-dom";
import {Nav} from "../header";
export const Layout = () => {
    return (<>
        <Nav/>
        <Outlet/>
    </>);
};
