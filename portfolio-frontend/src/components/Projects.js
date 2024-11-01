import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        {/* Repeat the following block for each project */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Object Detection for Detecting Damaged Buildings</h3>
          <p className="mt-2">A project to detect damaged buildings using YOLO and drone imagery.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/model_comparison_table.jpg" alt="Project Screenshot" className="mt-4" />
          </div>
          <a href="https://github.com/dolphinium/rescuenet-damaged-building-detection" target="_blank" rel="noreferrer" className="block mt-2 text-blue-500">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
