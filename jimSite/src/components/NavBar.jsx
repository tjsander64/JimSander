import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../stylesheets/navBar.css";

export function NavBar(props) {
    return (
        <div className="border-black border-bottom border-3 rounded-bottom-2 mb-2" id="header">
            <div className="d-flex container align-items-end h-100 w-100 ml-3 ">
                <Link to="/" className="">
                    <p className="border rounded-3 border-black d-flex mt-5 h3 fw-bold text-light px-2" id="home"> 🏠︎ Home </p>
                </Link>
            </div>

        </div>
    )
}