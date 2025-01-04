import React from 'react'
import SectionTitle from './SectionTitle'


function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
      <SectionTitle id={'about'}> About Me</SectionTitle>
      <p className='text-md text-gray-600 dark:text-gray-300'> I've always been passionate about learning and helping others. After working in education and customer service, I found my true calling in software development. My journey into tech began with the DigiGirlz event, where I was inspired by women in tech, and continued with GCode, where I gained hands-on coding experience.

I've completed a challenging Software Development bootcamp at Per Scholas, where I honed my programming skills. Although the journey is long, I'm excited and grateful for the opportunity to grow.

My diverse experiences have shaped my perspective, and I carry those lessons as I pursue my dream of becoming a software developer.</p>

      <a href="mailto:Halimoali94@gmail.com" className='block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-cyan-500 dark:hover:text-cyan-500'>Halimoali94@gmail.com</a>
    </div> 

    <img src={'/halimo.jpeg'} alt="Halimo"  className='w-full md:w-6/12 rounded-lg object-cover'/>

    
    </div>
    
  )
}

export default About
