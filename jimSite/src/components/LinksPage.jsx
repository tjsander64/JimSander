import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/LinksPage.css";
import { Link } from 'react-router-dom';



export function LinksPage(props) {
    return (
        <div className="text-light" id="LinksPage">
            <div className="LinksCont">
                <Link to="Gallery">
                    <div className="BigLink border border-white rounded" id="GalPane">
                        <h1 className="fw-bold  px-2"> Gallery</h1>
                    </div>
                </Link>

                <Link to="ChronicYardSale"> 
                    <div className="BigLink border border-white rounded" id="CYSPane">               
                        <h1 className="fw-bold fst-italic px-2"> Chronic Yard Sale </h1>
                    </div>
                </Link>

                <Link to="MilkOfAmnesia">
                    <div className="BigLink border border-white rounded" id="MOAPane">
                        <h1 className="fw-bold fst-italic px-2"> Milk Of Amnesia </h1>
                    </div>
                </Link>

                <Link to="About">
                    <div className="BigLink border border-white rounded" id="AbtPane">
                        <h1 className="fw-bold px-2"> About Jim </h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}