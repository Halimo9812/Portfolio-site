import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectData from './ProjectData'
import projects from '../data/project.js'


function Projects() {
  return (
    <div className='py-12'>
      <SectionTitle id={'projects'}>Recent Projects</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {projects.map(project => {
          console.log('Rendering project:', project);  // Debugging statement to check data
          return (
            <ProjectData
              key={project.id}  // Using unique id for the key
              imgUrl={project.imgUrl}
              title={project.title}
              tech={project.tech}
              demoUrl={project.demoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
