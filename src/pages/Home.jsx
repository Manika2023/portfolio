import React, { useEffect, useState, useRef } from 'react';
import myImage from '../assets/image/manika.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  const [bio, setBio] = useState('');
  const projectsRef = useRef(null); // Reference for the Projects section

  useEffect(() => {
    // Fetch the GitHub profile bio
    const fetchGitHubBio = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Manika2023');
        const data = await response.json();
        setBio(data.bio); // Set the bio from GitHub
      } catch (error) {
        console.error('Error fetching GitHub bio:', error);
      }
    };

    fetchGitHubBio();
  }, []);

  // Function to scroll to the Projects section
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <section id="my-home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gray-900 text-white p-6 lg:p-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-2/3 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hi, I'm <span className='text-purple-600 font-extrabold'>Manika</span>
          </h1>
          <p className="text-lg md:text-xl">A passionate Web Developer with Django</p>
          <p className="mt-4 text-sm md:text-base">{bio ? bio : 'Loading bio...'}</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
            <button
              onClick={scrollToProjects}
              className="px-4 py-2 cursor-pointer bg-blue-500 rounded transition-transform transform hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="https://github.com/Manika2023"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 rounded transition-transform transform hover:scale-105"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img
            src={myImage}
            alt="Manika"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </section>

      <About />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <Skills/>
      <Contact />
    </div>
  );
};

export default Home;
