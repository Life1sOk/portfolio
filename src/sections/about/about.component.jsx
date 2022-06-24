import React from "react";

import './about.style.scss';

const About = () => {
    return(
        <article className="about-container">
            <section className="me">
                <img alt="foto" src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000"/>
            </section>
            <section className="about-me">
                <h2>About</h2>
                <p>__________________________ <br/>
            _______________________________________________________</p>
            </section>
        </article>
    );
}

export default About;