import './App.css'
import Sidenav from './components/Sidenav/Sidenav'
import { Routes, Route, useLocation } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import CitiesPage from './pages/CitiesPage'
import MapPage from './pages/MapPage'
import SettingsPage from './pages/SettingsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StartPage from './pages/StartPage'

const queryClient = new QueryClient()

function App() {

  const currentLocation = useLocation().pathname

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-screen bg-[#0b131e] flex flex-row">
          {currentLocation !== '/' && <Sidenav />}
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/weather' element={<WeatherPage />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
