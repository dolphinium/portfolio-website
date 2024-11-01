import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p>I am a fresh graduate in Computer Engineering, specializing in AI and machine learning. I have experience in building intelligent applications and object detection systems, and I enjoy exploring new technologies. In my spare time, I love playing football and volleyball.</p>

        <h3 className="text-2xl font-semibold mt-8">Education</h3>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Eskisehir Technical University (2019-2024)</h4>
            <p>B.Sc. in Computer Engineering, GPA: 3.37/4, Eskişehir, Türkiye</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Eyüp Aygar Science High School (2014-2018)</h4>
            <p>High School Diploma, GPA: 91.06/100, Mersin, Türkiye</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8">Skills</h3>
        <ul className="list-disc list-inside mt-4">
          <li>Python</li>
          <li>Machine Learning & AI</li>
          <li>FastAPI</li>
          <li>React.js</li>
        </ul>
        <div className="flex flex-col items-center mb-10">
          {/* <img
            src='/assets/images/profile.jpg'
            alt="Yunus Emre Korkmaz"
            className="rounded-full w-48 h-48 border-4 border-black-500 shadow-md"
          />
          <p className="text-center mt-2 text-sm text-gray-600">Yunus Emre Korkmaz</p> */}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
