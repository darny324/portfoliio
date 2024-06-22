
import {  Routes, Route, useLocation} from 'react-router-dom'
import { Profile, Contact, Skills, Projects, NavBar, Home} from './page/index'
import React, { useRef } from 'react'


function App() {
  const currentUrl = useLocation();
  const {hash, pathname, search} = currentUrl;
  const doc = useRef(document);
  

  console.log(pathname);
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
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Skills" element={<Skills/>}/>
        </Routes>

      </div>
     
    </div>
  )
}

export default App
