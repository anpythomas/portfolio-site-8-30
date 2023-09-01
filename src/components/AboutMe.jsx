import React from "react";

const AboutMe = ({ counter, scrolling, scrollPosition }) => {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <p>Hello, I'm Andy, a full stack web developer.</p>
            <p>Counter: {counter}</p>
            <img 
                src="weller.png" 
                alt="Scroll Icon" 
                // className={`scroll-icon ${scrolling ? 'spinning' : ''}`}
                className='scroll-icon'
                style={{ transform: `rotate(${scrollPosition}deg)` }} // *   
            />

        </section>
    );
};

export default AboutMe;


