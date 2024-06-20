import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({pathname}) => {
  return (
    <div className="
    flex justify-between 
    shadow-xl rounded-lg  h-12
    ">
            <Link to="profile" className={`
              link
              ${ (pathname === "/profile") ? "bg-[#b8bbbd]" : ""}
              `}>
                <span>Profile</span>
              </Link>

            <Link to="projects" className={`
              link
              ${ (pathname === "/projects") ? "bg-[#b8bbbd]" : ""}
              `}>
                <span>Projects</span>
              </Link>
            
            <Link to="contact" className={`
              link
              ${ (pathname === "/contact") ? "bg-[#b8bbbd]" : ""}
              `}><span>Contact</span></Link>

            <Link to="education" className={`
              link
              ${ (pathname === "/education") ? "bg-[#b8bbbd]" : ""}
              `}><span>Education</span></Link>
            
            <Link to="skills" className={`
              link
              ${ (pathname === "/skills") ? "bg-[#b8bbbd]" : ""}
              `}><span>Skills</span></Link>
    </div>
  )
}

export default NavBar