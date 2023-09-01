import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./css/Branch-1.css";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [spinDirection, setSpinDirection] = useState("clockwise");
    const [scrollDirection, setScrollDirection] = useState("down");
    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0); // *

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const toggleSpinDirection = () => {
        setSpinDirection(
            spinDirection === "clockwise" ? "counter-clockwise" : "clockwise"
        );
    };

    useEffect(() => {
        let lastScrollTop = 0;

        const onScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

            setScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setScrolling(false);
            }, 100);

            setScrollPosition(scrollTop); // *
        };

        let scrollTimeout = null;
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <div className="App">
            <Header
                incrementCounter={incrementCounter}
                toggleSpinDirection={toggleSpinDirection}
            />
            <AboutMe
                counter={counter}
                spinDirection={spinDirection}
                scrollDirection={scrollDirection}
                scrolling={scrolling}
                scrollPosition={scrollPosition}
            />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
