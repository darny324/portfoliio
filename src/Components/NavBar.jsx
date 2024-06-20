import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({pathname}) => {
  return (
    <div className="
    flex justify-between 
     rounded-lg  h-12
    ">
            <Link to="profile" className={`
              link
              ${ (pathname === "/profile") ? "bg-[#e8e7ec]" : ""}
              `}>
                <span>Profile</span>
              </Link>

            <Link to="projects" className={`
              link
              ${ (pathname === "/projects") ? "bg-[#e8e7ec]" : ""}
              `}>
                <span>Projects</span>
              </Link>
            
            <Link to="contact" className={`
              link
              ${ (pathname === "/contact") ? "bg-[#e8e7ec]" : ""}
              `}><span>Contact</span></Link>

            <Link to="education" className={`
              link
              ${ (pathname === "/education") ? "bg-[#e8e7ec]" : ""}
              `}><span>Education</span></Link>
            
            <Link to="skills" className={`
              link
              ${ (pathname === "/skills") ? "bg-[#e8e7ec]" : ""}
              `}><span>Skills</span></Link>
    </div>
  )
}

export default NavBar