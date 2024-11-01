import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p>I am a fresh graduate in Computer Engineering, specializing in AI and machine learning. I have experience in building intelligent applications and object detection systems, and I enjoy exploring new technologies. In my spare time, I love playing football and volleyball.</p>
        <h3 className="text-2xl font-semibold mt-8">Skills</h3>
        <ul className="list-disc list-inside mt-4">
          <li>Python</li>
          <li>Machine Learning & AI</li>
          <li>FastAPI</li>
          <li>React.js</li>
        </ul>
        <div className="mt-8">
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
