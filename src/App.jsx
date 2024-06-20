
import {  Routes, Route, useLocation} from 'react-router-dom'
import { Profile, Contact, Education, Skills, Projects, NavBar} from './page/index'


function App() {
  const currentUrl = useLocation();
  const {hash, pathname, search} = currentUrl;

  return (
    <div className="flex justify-center items-center h-screen max-sm:h-[1000px]">
      <div className=" w-[720px] h-[500px] max-sm:h-[800px] mx-5 rounded-xl shadow-2xl flex flex-col gap-5">
        <NavBar pathname={pathname}/>
        <Routes>
          <Route index element={<Profile/>} />
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Skills" element={<Skills/>}/>
        </Routes>

      </div>
     
    </div>
  )
}

export default App
