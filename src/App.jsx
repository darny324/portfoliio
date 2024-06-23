
import {  Routes, Route, useLocation} from 'react-router-dom'
import { Profile, Contact, Skills, Projects, NavBar, Home} from './page/index'
import React, { useRef } from 'react'
import { AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();
  const {hash, pathname, search} = location;
  const doc = useRef(document);

  
  if ( pathname === '/home' || pathname === '/')
  {
    console.log(pathname);
    doc.current.body.style = `
    background-image: url('../src/assets/images/tech.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
    `;
  }
  else 
  {
    doc.current.body.style = `
    background-color: #010312;
    `;
  }
  return (
    <div>
      <div className="flex flex-col relative">
        <NavBar pathname={pathname}/>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/skills" element={<Skills/>}/>
          </Routes>
        </AnimatePresence>

      </div>
     
    </div>
  )
}

export default App
