
import {  Routes, Route, useLocation} from 'react-router-dom'
import { Profile, Contact, Skills, Projects, NavBar} from './page/index'


function App() {
  const currentUrl = useLocation();
  const {hash, pathname, search} = currentUrl;

  return (
    <div>
      <div className="flex flex-col relative">
        <NavBar pathname={pathname}/>
        <Routes>
          <Route index element={<Profile/>} />
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
