import './App.css'
import Sidenav from './components/Sidenav'
import { Routes, Route } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import CitiesPage from './pages/CitiesPage'
import MapPage from './pages/MapPage'
import SettingsPage from './pages/SettingsPage'

function App() {

  return (
    <>
      <div className="h-screen w-screen bg-[#0b131e] flex flex-row">
        <Sidenav />
        <Routes>
          <Route path='/weather' element={<WeatherPage />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
