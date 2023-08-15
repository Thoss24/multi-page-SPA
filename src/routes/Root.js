import MainNav from "../components/MainNav";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import classes from './Root.module.css';

const Root = () => {
    return (
        <Fragment>
            <MainNav></MainNav>
            <main className={classes.content}>
            <Outlet />
            </main>
        </Fragment>
    )
};

export default Root