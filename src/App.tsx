import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Login />
        <Dashboard />
      </BrowserRouter>
      
    </div>
  )
}

export default App
