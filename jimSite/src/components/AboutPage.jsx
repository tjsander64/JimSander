import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/AboutPage.css"

export function AboutPage(props) {
    return (
        <div>
            <h1 className="fw-bold text-light"> About Jim </h1>
            <div className="OverallAbout">
                <div className="Jimself">
                    <img className="border border-white" alt="Jim, my dad, middle-aged white guy, sits in a chair in a small room. The chair is Ikea brand, called a 'Poang.' He has a white beard and a serious, if slightly surprised, look on his face." src="src/assets/Poang.jpeg"/>
                </div>
                <div className="BioCopy">
                    <p>
                    Jim Sander (1961) lives in West Seattle, WA. Rarely seen in public, Jim makes his living at the fringes of the corporate TV world where he participates in making executives look and sound good. An untrained artist, he is somewhat shy about his work, and hence refers to himself as a “funny picture maker” rather than as a painter. He fondly remembers the Television program "The Wild Wild West," though actually meeting its lead actor and his childhood hero, Robert Conrad, on an infomercial set is considered a low point of his career; a sad moment, proving that the manipulated image and the actual reality of the world are two vastly different things. Jim is married to his very favorite human being in the world, who he thanks for saving him from a shabby life under a blue tarp, down by the river.
                    </p>
                </div>
            </div>
            
        </div>
        
    )
}