import React from "react";
import "../stylesheets/card.css"
import { Link } from 'react-router-dom';


export function Card(props) {
    var photoPath = props.photo;
    var desc = props.desc;
    var skills = props.skills;
    var link = props.link;
    var ext = props.ext;

    if(ext) {
        return (
        
            <div className="card p-0">
                <a href = {link} className="p-0">
                    <img className="p-0" src={photoPath}></img> 
                    <p className="fw-bold pb-0"> {skills} </p>  
                    <p className=""> {desc} </p>  
                </a>         
            </div>
    )
    } else {
        return (
            <div className="card p-0 w-100">
                <a href={link} className="p-0">
                    <img className="border border-black" src={photoPath}></img> 
                    <p className="fw-bold pb-0 d-flex p-1 justify-content-center"> {skills} </p>  
                    <p className="d-flex p-1 mt-0 justify-content-center"> {desc} </p>  
                </a>         
            </div>
        )
    }
    
}