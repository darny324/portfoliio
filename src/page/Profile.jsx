import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from '../assets/images/saber.png'

const Profile = () => {
  return (
    <section className="
     text-white
    ">
      <div className="max-container mt-8 flex flex-between">
        <div className='w-[400px] h-[400px] bg-white'>
          <img src={ProfilePic} className="px-8 py-8 rounded-full w-full h-full object-cover left-5 object-[-150px]"></img>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Profile