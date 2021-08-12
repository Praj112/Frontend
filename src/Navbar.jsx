import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar =() => {



    return (
        <>
        <div className="nav_bg">
            <div className="row">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand"  to="/">
                              <h1 className="brand"> OurBrand </h1>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0"  >
                                    <li className="nav-item">
                                        <NavLink style={{color:'white'}} activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{color:'white'}} activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{color:'white'}} activeClassName='menu_active' className="nav-link" to="/breathe">Breathe</NavLink>
                                    </li>


                                    <li className="nav-item">
                                        <button type="button" className="btn btn-danger">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default Navbar;