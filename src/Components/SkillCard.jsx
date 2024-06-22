import React from 'react'

const SkillCard = (props) => {
  return (
    <div className="px-10 py-10">
      <img src={props.imgURL} width={150} height={150} className="object-contain"></img>
      <h1 className="text-white italic text-xl">{props.title}</h1>
      <p className="text-[#a09d9d] italic">{props.text}</p>
    </div>
  )
}

export default SkillCard