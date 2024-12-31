import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
      <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-blue-600 font-semibold dark:text-blue-500'> Hi, I am Halimo</h1>
      <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro tenetur sapiente consequatur explicabo quis! 
      </p>
      <a href="#"className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-violet-700 md:text-md mr-4'>My Projects</a>
      <a href="#"className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-violet-700 md:text-md'>My Resume</a>
    </div>
    </div>
  )
}

export default Hero

