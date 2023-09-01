import React from 'react';

const Header = ({ incrementCounter, toggleSpinDirection, spinDirection }) => {
  return (
    <header>
      {/* <img src="react.svg" alt="React Logo" className={`react-icon ${spinDirection}`} /> */}
      <img src="react.svg" alt="React Logo" />


      <h1>Your Name</h1>
      <p>Full Stack Web Developer</p>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={toggleSpinDirection}>Toggle Spin Direction</button>
    </header>
  );
}

export default Header;
