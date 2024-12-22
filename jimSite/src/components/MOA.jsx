import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../stylesheets/MOA.css";

export function MilkOfAmnesia(props) {
    return (
        <div>
            <div className="fw-bold"><h1> Oedipal Breakfast: Milk of Amnesia </h1></div>
            <div className="d-flex ifcont container">
                <div className="vidmb embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e4G75tYeuBo?si=mHxYnlINsDsTC1zb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
                </div>
            </div>
            <p> Here's some commentary about the movie. Note: replace with commentary about the movie</p>
            <p> If you're so inclined, you can <a href="https://www.amazon.com/Milk-Amnesia-Henry-Porter/dp/B0B6R41RNL" > rent it on Amazon Prime. </a></p>
           
        </div>

        
    )
}