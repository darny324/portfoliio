import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from '../assets/images/saber.png'

const Profile = () => {
  return (
    <section className="
    flex items-center flex-1 justify-between
    max-sm:flex-col
    ">
      <div className='w-[220px] h-[220px] mx-10 mt-10'>
        <img src={ProfilePic} className="rounded-full w-full h-full object-cover left-5 object-[-120px]"></img>
      </div>
      <div className="flex-1 h-full py-8 pr-6 max-sm:pl-6 max-sm:py-12">
        <div>
          <h1 className="font-sans font-bold text-3xl text-[#4750a0]">Khant Sin Kyal</h1>
          <span className="text-[#81828d] mt-4">Still a Student</span>
        </div>

        <div className="mt-9">
          <span className="text-black font-bold text-2xl">Profile:</span>
          <p className="text-royal-blue font-semibold text-base leading-normal mt-4">
          Hello! My name is Khant Sin Kyal, and I am an aspiring developer with a passion for coding and web development. I embarked on my coding journey about a year ago and have since developed a solid foundation in C++, html, css, js. Though my professional experience is zero, my dedication and enthusiasm for learning are boundless.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Profile