import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/LinksPage.css";
import { Link } from 'react-router-dom';



export function LinksPage(props) {
    return (
        <div className="text-light mx-5 mt-5" id="LinksPage">
            <div className="LinksCont">
                <Link to="Gallery">
                    <div className="BigLink border border-2 border-black rounded-4 " id="GalPane">
                        <h1 className="fw-bold  px-2"> Art Gallery</h1>
                    </div>
                </Link>

                <Link to="MiscPage"> 
                    <div className="BigLink border border-2 border-black rounded-4 " id="CYSPane">               
                        <h1 className="fw-bold px-2"> Other Work </h1>
                    </div>
                </Link>

                <Link to="About">
                    <div className="BigLink border border-2 border-black rounded-4 " id="AbtPane">
                        <h1 className="fw-bold px-2"> About Jim </h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}