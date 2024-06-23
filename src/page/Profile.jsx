import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from '../assets/images/saber.png'
import { motion } from 'framer-motion'

const Profile = () => {
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
    className="
     text-white
    ">
      <div className="max-container max-lg:mx-10 mt-8 flex flex-wrap flex-row lg:justify-start max-lg:flex-col max-lg:items-center">
        <div className='w-[400px] h-[400px] bg-white rounded-sm lg:mr-36 max-lg:mb-12'>
          <img src={ProfilePic} className="px-8 py-8 rounded-full w-full h-full object-cover object-[-180px]"></img>
        </div>
        <div className="w-[400px] h-[400px]">
          <div>
            <h1 className="text-3xl">About Me</h1>
            <p className="text-coral-red">Hi! My name is Khant Sin Kyal</p>
          </div>
          
          <p className="text-slate-gray font-semibold text-base leading-normal mt-4">
            I am an aspiring developer with a passion for coding and web development. I embarked on my coding journey about a year ago and have since developed a solid foundation in C++, html, css, js. Though my professional experience is zero, my dedication and enthusiasm for learning are boundless.
          </p>

          <div>
            <ol className="h-full grid grid-cols-2 gap-2 list-decimal ml-4 mt-5 text-lg italic font-semibold">
              <li>Critilcal thinking</li>
              <li>Web Development</li>
              <li>Game Development</li>
            </ol>
          </div>
          
          <div className="mt-8">
            <Link to='../contact' className="
            bg-coral-red px-3 py-3 text-white text-lg font-semibold
            rounded-lg
            "><span>Contact me</span></Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile