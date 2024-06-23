import React from 'react'
import { myProjects } from '../constant/projects'
import ProjectCard from '../Components/ProjectCard';
import { motion } from 'framer-motion'

const Projects = () => {
  console.log(myProjects.length);
  return (
    <motion.div
    initial={
      { opacity: 0}
    }
    animate={
      { 
        opacity: 1, 
        transition: {
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        },
      }
    }
    exit={
      {
        opacity: 0
      }
    }
     className="text-white mb-10">
      <div className="text-center mt-3 mb-10">
        <h3 className=" text-5xl font-bold italic mb-3">My Projects</h3>
        <p className="text-coral-red italic">Some of my distinguished works</p>
      </div>
      <div className="max-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-lg:mx-10">
        {
          myProjects.map((project) => {
            return (
              <ProjectCard key={project.title} {...project}></ProjectCard>
            );
          })
        }
      </div>
    </motion.div>
  )
}

export default Projects