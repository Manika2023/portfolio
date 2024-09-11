import React from 'react';
import myImage from '../assets/image/manika.png'

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Image with hover effect */}
        <div className="md:w-1/4 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src={myImage} // replace with your image link or import
            alt="Your Profile"
            className="w-48 h-48 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" 
          />
        </div>

        {/* Center - Vertical Line */}
        <div className="hidden md:block w-px h-64 bg-indigo-500 mx-8"></div>

        {/* Right side - About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">About Me</h2>
          <div className="flex justify-center mx-auto lg:mx-0  w-44 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

          <p className="text-xl mb-8">
            Hi, I'm a passionate full-stack developer skilled in both frontend and backend technologies. I love building interactive and functional web applications.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">Frontend Skills</h3>
              <ul className="list-disc list-inside text-left">
                <li>HTML</li>
                <li>CSS (Tailwind, Bootstrap)</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">Backend Skills</h3>
              <ul className="list-disc list-inside text-left">
                <li>Django</li>
                <li>Django Rest Framework (DRF)</li>
                <li>WebSocket (Real-time communication)</li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <p className="text-xl mt-8">
            I'm constantly learning new technologies and improving my skills to build better and more efficient applications. Let's build something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
