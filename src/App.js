import './App.css';
import pic from './pic.png'; // Import the image using a variable
import React, { useState, useEffect } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const roles = ["Graphic Designer", "React Developer", "Full-Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true); // Start fade-in
      }, 500); // Wait for fade-out duration before changing text
    }, 1600); // Total time for one complete cycle (fade-out + change text + fade-in)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [roles.length]);

  return (
    <div className='body'>
      <div className='bar'>
        <h2>Daniela</h2>
        <div className='nav'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className='content'>
        <h1>Hi, I'm Daniela Odhiambo</h1>
        <h1>
          I'm a <span className={fade ? 'fade-in' : 'fade-out'}>{roles[index]}</span>
          <div className="image-container">
            <div className="rectangle-behind"></div>
            <img src={pic} />
          </div>
        </h1>
        <h2 className='freehand-font'>Based in Kenya</h2>
      </div>
    </div>
  );
}

export default App;
