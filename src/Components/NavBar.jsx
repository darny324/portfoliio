import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({pathname}) => {
  return (
    <div className="
    w-full shadow-xsm shadow-slate-800
    ">
      <nav className='flex items-center w-full justify-between max-container'>
        <div className="text-white text-2xl italic font-bold">Portfo<span className="text-coral-red">lio</span></div>

        <div className="flex justify-between italic
        rounded-lg  h-12 text-white w-1/2">

            <Link to="home" className={`
              link
              `}><span>Home</span></Link>

            <Link to="profile" className={`
              link
              `}>
                <span>About me</span>
              </Link>

            
            <Link to="skills" className={`
              link
              `}><span>Skills</span></Link>

            <Link to="projects" className={`
              link
              `}><span>Projects</span></Link>
            
            <Link to="contact" className={`
              link
              `}><span>Contact</span></Link>

            
            
            
        </div>
      </nav>
    </div>
  )
}

export default NavBar