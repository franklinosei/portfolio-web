import React, { Component } from "react";
import { Link } from "react-router-dom";

import withRouter from "../../hooks/with_router"
import DownloadCV from "./download.cv";
import ProfileComponent from "./profileComponent";
import Socials from "./socials";

class Sidebar extends Component {
    state = {};


    componentDidUpdate(prevProps) {
        if (this.props.router.location !== prevProps.router.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        document.querySelector("#sidebar").classList.remove("active");
        Object.keys(this.state).forEach((i) => {
            this.setState({ [i]: false });
        });

    }

    render() {
        return (
            <nav className='drop-shadow-2xl sidebar sidebar-offcanvas' id='sidebar'>

                <ProfileComponent />
              

                <ul className='nav'>

                    {/* Home */}


                    <li
                        className={
                            this.isPathActive("/")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/'>
                            <span className='menu-title'>Home</span>
                        </Link>
                    </li>

                    {/* About */}
                    {/* <li
                        className={
                            this.isPathActive("/about")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/about'>
                            <span className='menu-title'>About</span>
                        </Link>
                    </li> */}

                    <li
                        className={
                            this.isPathActive("/skills")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/skills'>
                            
                            <span className='menu-title'>My Skills</span>
                        </Link>
                    </li>

                    <li
                        className={
                            this.isPathActive("/projects")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/projects'>
                          
                            <span className='menu-title'>Projects</span>
                        </Link>
                    </li>


                    <li
                        className={
                            this.isPathActive("/contact")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/contact'>
                            
                            <span className='menu-title'>Contact</span>
                        </Link>
                    </li>


                    <li
                        className={
                            this.isBlogPathActive("/blog")
                                ? "nav-item menu-items active"
                                : "nav-item menu-items"
                        }>
                        <Link className='nav-link' to='/blog'>
                           
                            <span className='menu-title'>Blog</span>
                        </Link>
                    </li>

                </ul>

                <div className="pt-4">
                    <Socials />
                </div>

                <div className="pt-2">
                    <DownloadCV />
                </div>
            </nav>
        );
    }

    isPathActive(path) {
        return this.props.router.location.pathname === path;
    }

    isBlogPathActive(path) {
        return this.props.router.location.pathname.startsWith(path);
    }

    // componentDidMount() {
    //     this.onRouteChanged();
    //     // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    //     const body = document.querySelector("body");
    //     document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
    //         el.addEventListener("mouseover", function () {
    //             if (body.classList.contains("sidebar-icon-only")) {
    //                 el.classList.add("hover-open");
    //             }
    //         });
    //         el.addEventListener("mouseout", function () {
    //             if (body.classList.contains("sidebar-icon-only")) {
    //                 el.classList.remove("hover-open");
    //             }
    //         });
    //     });
    // }
}

export default withRouter(Sidebar);
