import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Real Coders Blog Platform",
      description: "A platform for posting code solutions with Django and Bootstrap.",
      link: "https://github.com/Manika2023/miniblog-django",
    },
    {
      title: "Aroma Pen Website",
      description: "A beautiful pen website built with React and Tailwind CSS.",
      link: "https://github.com/Manika2023/pen_react_djangoApi",
    },
    {
      title: "Collaborative Whiteboard Application with WebSocket",
      description: "   An interactive whiteboard application that allows real-time collaboration using WebSocket technology. Built with HTML, CSS, and JavaScript.",
      link: "https://github.com/Manika2023/whiteboardMaster-websocket",
    },
    {
      title: "Blog Platform with React and Django REST Framework",
      description: "A full-featured blog platform built with React for the frontend and Django REST Framework (DRF) for the backend. Includes user authentication, CRUD operations for posts, and more.",
      link: "https://github.com/Manika2023/myBlog_react_drf",
    },
    {
      title: "Monika Mehndi - Custom Mehndi Design Booking Platform",
      description: "An online platform for booking custom Mehndi (Henna) designs. Built with a user-friendly interface to browse and book Mehndi services.",
      link: "https://github.com/Manika2023/MonikaMehndi/",
    },
    {
      title: "Todo App with Context API and Local Storage",
      description: "A Todo application built using React's Context API for state management and local storage for persistent data. Allows users to add, complete, and delete tasks.",
      link: "https://todo-local-context-react.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">My Projects</h2>
        <div className="flex justify-center mx-auto w-44 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <h3 className="font-bold text-xl mb-2  text-purple-500">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
