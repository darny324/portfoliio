import React from 'react'
import { myProjects } from '../constant/projects'
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  console.log(myProjects.length);
  return (
    <div className="text-white mb-10">
      <div className="text-center mt-3 mb-10">
        <h3 className=" text-5xl font-bold italic mb-3">My Projects</h3>
        <p className="text-coral-red italic">Some of my distinguished works</p>
      </div>
      <div className="max-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-lg:mx-6">
        {
          myProjects.map((project) => {
            return (
              <ProjectCard key={project.title} {...project}></ProjectCard>
            );
          })
        }
      </div>
    </div>
  )
}

export default Projects