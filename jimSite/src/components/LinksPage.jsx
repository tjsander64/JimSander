import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/LinksPage.css";
import { Link } from 'react-router-dom';



export function LinksPage(props) {
    return (
        <div className="text-light">
            <div className="LinksCont">
                <Link to="Gallery">
                    <div className="BigLink">
                        <h1 className="fw-bold"> Gallery</h1>
                    </div>
                </Link>

                <Link to="ChronicYardSale"> 
                    <div className="BigLink">               
                        <h1 className="fw-bold fst-italic"> The Chronic Yard Sale </h1>
                    </div>
                </Link>

                <Link to="MilkOfAmnesia">
                    <div className="BigLink">
                        <h1 className="fw-bold fst-italic"> Milk Of Amnesia </h1>
                    </div>
                </Link>

                <Link to="About">
                    <div className="BigLink">
                        <h1 className="fw-bold"> About Jim </h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}