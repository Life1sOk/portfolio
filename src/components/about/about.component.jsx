import React from "react";

import './about.style.scss';

const About = () => {
    return(
        <div className="about-container">
            <div className="me">
                <img alt="foto" src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000"/>
            </div>
            <div className="about-me">
                <h2>About</h2>
                <p>_________________________________________________________________</p>
                <p>_________________________________________________________________</p>
                <p>_________________________________________________________________</p>
                <p>_________________________________________________________________</p>
            </div>
        </div>
    );
}

export default About;