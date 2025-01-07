import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
      <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-blue-600 font-semibold dark:text-blue-500'> Hi, I am Halimo</h1>
      <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'> I am a developer with experience in both front-end and back-end technologies, as well as UI design. Welcome to my portfolio website!

      </p>
      <a href="#projects"className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-violet-700 md:text-md mr-4'>My Projects</a>
      <a href="#about"className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-violet-700 md:text-md'>About Me</a>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-6">
          <a
            href="https://github.com/Halimo9812"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hali98/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          {/* Resume Icon */}
          <a
            href="/resume.pdf"  
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fas fa-file-download text-3xl"></i>
          </a>
        </div>
    </div>
    </div>

    
  )
}

export default Hero

