import './App.css'
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Knights from './screens/Knights'
import DisplayKnights from './screens/DisplayKnights'
import Team from './screens/Team'
import Home from './screens/Home'
import Contact from './screens/Contact'
import ScreenQuest from './screens/ScreenQuest'

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/knights' element={<Knights />} />
        <Route path='/knights/:id' element={<DisplayKnights />} />
        <Route path='/team' element={<Team />} />
        <Route path='/screenquest' element={<ScreenQuest />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
