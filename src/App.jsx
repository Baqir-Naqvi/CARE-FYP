import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import CustomNavbar from './components/Navbar/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <CustomNavbar />
      <HomePage />

    </div>
  )
}

export default App
