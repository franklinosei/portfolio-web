import React, { Component } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import withRouter from "../../hooks/with_router";
import { Link } from "react-router-dom";
import DownloadCV from "./download.cv";
import { amberColor } from "../../utilities/config";


class Navbar extends Component {

    state = {}

    onMenuClick() {
        var navbar = document.getElementById('navigation-bar');
        var responsive_class_name = 'responsive'
        navbar.classList.toggle(responsive_class_name)
    }


    componentDidUpdate(prevProps) {
        if (this.props.router.location !== prevProps.router.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        document.querySelector("#navbar").classList.remove("active");
        Object.keys(this.state).forEach((i) => {
            this.setState({ [i]: false });
        });

    }


    render() {



        return (

            <div className="page-header z-160" id="navbar" >
                <div className='navbar-content'>

                    {/* should be a button that leads ack to the homepage */}
                    <div className="title">
                        <Link to="/">

                            <svg className="h-8 w-8" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.09 137.95">
                                <polygon fill={amberColor} points="155.77 0 110.46 0 110.46 31.8 126.01 31.8 92.79 110.46 65.42 31.8 82.35 31.8 82.35 0 0 0 0 31.8 19.52 31.8 65.42 137.95 102.14 137.95 146.35 31.8 155.77 31.8 155.77 0" />
                                <path fill={amberColor} d="M175.77,79.3c-16.19,0-29.32,13.13-29.32,29.32s13.13,29.32,29.32,29.32,29.32-13.13,29.32-29.32-13.13-29.32-29.32-29.32Z" />
                            </svg>

                        </Link>
                    </div>

                    <div id="navigation-bar" className="nav-bar">

                        <div className="title mb-8 mt-4">
                            <Link to="/"  onClick={this.onMenuClick}>

                                <svg className="h-20 w-20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.09 137.95">
                                    <polygon fill={amberColor} points="155.77 0 110.46 0 110.46 31.8 126.01 31.8 92.79 110.46 65.42 31.8 82.35 31.8 82.35 0 0 0 0 31.8 19.52 31.8 65.42 137.95 102.14 137.95 146.35 31.8 155.77 31.8 155.77 0" />
                                    <path fill={amberColor} d="M175.77,79.3c-16.19,0-29.32,13.13-29.32,29.32s13.13,29.32,29.32,29.32,29.32-13.13,29.32-29.32-13.13-29.32-29.32-29.32Z" />
                                </svg>


                            </Link>

                           
                        </div>



                        <Link to="/" onClick={this.onMenuClick}>
                            <button
                                className={this.isPathActive("/") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>Home</h6>
                            </button>
                        </Link>


                        {/* <Link to="/about" onClick={this.onMenuClick}>
                            <button
                                className={this.isPathActive("/about") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>About</h6>
                            </button>
                        </Link> */}

                        <Link to="/skills" onClick={this.onMenuClick}>

                            <button
                                className={this.isPathActive("/skills") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>My Skills</h6>
                            </button>
                        </Link>
                        <Link to="/projects" onClick={this.onMenuClick}>

                            <button
                                className={this.isPathActive("/projects") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>Projects</h6>
                            </button>
                        </Link>
                        <Link to="/contact" onClick={this.onMenuClick}>

                            <button
                                className={this.isPathActive("/contact") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>Contact</h6>
                            </button>
                        </Link>
                        <Link to="/blog" onClick={this.onMenuClick}>
                            <button
                                className={this.isPathActive("/blog") ? "animate-bounce nav-item nav-item-active" : 'nav-item'}
                            // onClick={}
                            >
                                <h6>Blog</h6>
                            </button>
                        </Link>

                        <DownloadCV />

                    </div>
                </div>




                <button id="menu-icon" className="menu-icon shadow-2xl" onClick={this.onMenuClick}>
                    <MenuIcon className='text-white' />
                </button>


            </div>


        )
    }

    isPathActive(path) {
        return this.props.router.location.pathname === path;
    }

}

export default withRouter(Navbar)