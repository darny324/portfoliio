import React from 'react'
import SkillCard from '../Components/SkillCard'
import { skills } from '../constant/skills'

const Skills = () => {
  
  return (
    <div>
      <div className="max-container mt-10">
        <h1 className=" text-5xl italic text-white text-center ">My Skills</h1>

        <div className="flex flex-col my-10 bg-[#11141D] rounded-lg max-lg:mx-10">
          {
            skills.map((skill) => {
              return (
                <SkillCard key={skill.title} imgURL={skill.imgURL} title={skill.title} text={skill.text}></SkillCard>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills