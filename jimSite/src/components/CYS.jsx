import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/CYS.css";


export function ChronicYardSale(props) {
    return (
        <div>
            <h1 className="fw-bold text-light"> The Chronic Yard Sale: A Novel </h1>
            <div className="OverallCYS">
                <div className="cover">
                    <img className="border border-white" alt="The front cover of Jim's book, the Chronic Yard Sale. Painted by Jim, it depicts a pile of mostly junk, a pomeranian sitting on a lawn chair, and a steel fence in front of a dark house. A flying saucer hovers in front of the sunset." src="src/assets/Chronic Yard Sale 1.JPG" />
                </div>
                <div className="DescCopy">
                    <p>
                    Scott Archer thought his home was an impenetrable sanctuary. His life would seem perfect, a loving wife and a teenaged son, a joylessly efficient Subaru... but just outside his tastefully landscaped yard, chaos reigns. He lives next door to an unending yard sale, that threatens to overwhelm him with used Christmas ornaments and broken tupperware. Frustration with his uncontrolable neighbor, proves too much for a man defined by his painstaking restoration of a craftsman bungalow. While the yard sale next door is the scourge of the neighborhood... (cont.)
                    </p>
                    <p>
                        <a className="fw-bold" href="https://www.amazon.com/Chronic-Yard-Sale-Jim-Sander/dp/1500629332">Check it out on Amazon books here. </a>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

        