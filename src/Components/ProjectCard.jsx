import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col bg-[#11141D] px-4 py-4 rounded-md">
      <div>
        <img src={props.imgURL} className="object-cover rounded-lg w-[300px] h-[150px]"></img>
      </div>
      <div className="text-[#da4141] italic mt-3">{props.field}</div>
      <a target='_blank' href={props.link} className="text-blue-600 hover:text-blue-400 underline mt-3 break-words">{props.link}</a>
      <h1 className="text-2xl text-white italic  mt-3">{props.title}</h1>
      
    </div>
  )
}

export default ProjectCard