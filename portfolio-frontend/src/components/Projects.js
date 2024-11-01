import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Damaged Building Detection",
      description: "Developed an object detection model to identify damaged buildings using drone imagery.",
      githubLink: "https://github.com/dolphinium/rescuenet-damaged-building-detection",
      image: "/assets/images/model_comparison_table.jpg",
    },
    {
      title: "Damaged Building Detection",
      description: "Developed an object detection model to identify damaged buildings using drone imagery.",
      githubLink: "https://github.com/dolphinium/rescuenet-damaged-building-detection",
      image: "/assets/images/model_comparison_table.jpg",
    },
    {
      title: "Damaged Building Detection",
      description: "Developed an object detection model to identify damaged buildings using drone imagery.",
      githubLink: "https://github.com/dolphinium/rescuenet-damaged-building-detection",
      image: "/assets/images/model_comparison_table.jpg",
    },
    {
      title: "Damaged Building Detection",
      description: "Developed an object detection model to identify damaged buildings using drone imagery.",
      githubLink: "https://github.com/dolphinium/rescuenet-damaged-building-detection",
      image: "/assets/images/model_comparison_table.jpg",
    },
    // Add more projects here...
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <img src={project.image} alt={project.title} className="rounded mb-4" />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
