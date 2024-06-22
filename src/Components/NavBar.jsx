import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../assets/images/hamburger2.svg'

const NavBar = ({pathname}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  function clickNavButton()
  {
    setIsOpen((o) => !o);
  }

  return (
    <nav className="
    w-full shadow-xsm shadow-slate-800
    ">
      <ul className='max-sm:block flex  py-3 items-center w-full justify-between max-container max-sm:px-6 flex-wrap'>
        <li className="max-sm:w-full flex justify-between">
          <a href="\" className="text-white text-2xl italic font-bold">
            Portfo<span className="text-coral-red">lio</span>
          </a>
        

          <button className="hidden max-sm:block nav-button"  onClick={clickNavButton}>
              <img src={hamburger} width={24} height={24}></img>
          </button>
        </li>
       
        <li className={
          `italic flex justify-stretch w-1/2 nav-link ${isOpen ? "is-open" : ""}
        rounded-lg text-white`
        } >
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
        </li>

        
        
      </ul>
    </nav>
  )
}

export default NavBar