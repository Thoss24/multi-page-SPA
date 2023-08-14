import MainNav from "../components/MainNav";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Fragment>
            <MainNav></MainNav>
            <Outlet />
        </Fragment>
    )
};

export default Root