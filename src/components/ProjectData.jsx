import React from 'react'


const ProjectData = ({ imgUrl, title, tech, demoUrl }) => {
  console.log('ProjectData received:', { imgUrl, title, tech, demoUrl });  // Debugging

  return (
    <div className='bg-slate-300 dark:bg-slate-800  border-gray-200 rounded-md shadow-md' >
      <img src={imgUrl} alt={title} className="w-full h-36 md:h-48 object-cover" />
      <div className=' text-gray-600 dark:text-gray-300 p-5 w-full'>
      <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold  text-gray-600 dark:text-gray-300">{title}</h3>
      <p className=" flex flex-wrap gap-2 flex-row justify-start items-center text-xs md:text-sm text-gray-600 dark:text-gray-300  px-3 py-1 bg-slate-200 dark:bg-slate-900 rounded-md " > {tech.join(', ')}
      </p>
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
          View Demo
        </a>
      )}
    </div>
    </div>
  );
};

export default ProjectData;
