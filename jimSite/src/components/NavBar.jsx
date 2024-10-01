import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function NavBar(props) {
    return (
        <div className="d-flex container">
            <Link to="/">
                <p className="d-flex align-items-center"> Home (Todo: Big cool logo) </p>
            </Link>
        </div>
    )
}