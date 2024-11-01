import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">Yunus Emre Korkmaz</div>
        <div className="space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work-experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
