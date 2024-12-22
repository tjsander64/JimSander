import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/LinksPage.css";
import { Link } from 'react-router-dom';



export function MiscPage(props) {
    return (
        <div className="text-light mx-5 mt-4 mb-2" id="LinksPage">
            <div className="h1 text-dark fw-bold mb-5 mt-2"> Other Works </div>
            <div className="LinksCont justify-content-center">


                <Link to="ChronicYardSale"> 
                    <div className="BigLink border border-2 border-black rounded-4 " id="CYSPane">               
                        <h1 className="fw-bold fst-italic px-2"> Chronic Yard Sale </h1>
                    </div>
                </Link>

                <Link to="MilkOfAmnesia">
                    <div className="BigLink border border-2 border-black rounded-4 " id="MOAPane">
                        <h1 className="fw-bold fst-italic px-2"> Milk Of Amnesia </h1>
                    </div>
                </Link>

            </div>
        </div>
    )
}