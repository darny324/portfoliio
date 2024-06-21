import React from 'react'
import { myProjects } from '../constant/projects'

const Projects = () => {
  console.log(myProjects.length);
  return (
    <div className="h-[800px] overflow-y-scroll scrollbar">
      {
        myProjects.map((project) => {
          return (
            <div key={project.name} className="mb-4">
              <p>{project.name}</p>
              <a href={project.link} className="underline text-blue-500" target='_blank'>{project.link}</a>
              <p>{project.text}</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default Projects