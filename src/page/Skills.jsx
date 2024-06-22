import React from 'react'
import frontEnd from '../assets/images/front-end-design.png'
import SkillCard from '../Components/SkillCard'

const Skills = () => {
  const text = "Front-end development creates the visual and interactive elements of a website, ensuring an engaging user experience with HTML, CSS, and JavaScript.";
  return (
    <div>
      <div className="max-container mt-10">
        <h1 className=" text-5xl italic text-white text-center">My Skills</h1>

        <div className="flex flex-col mt-10 bg-[#11141D] rounded-lg">
          <SkillCard imgURL={frontEnd} title={"Front-End Development"} text={text}></SkillCard>
        </div>
      </div>
    </div>
  )
}

export default Skills