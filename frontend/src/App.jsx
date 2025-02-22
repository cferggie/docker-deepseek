import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRobot } from "react-icons/fa";
import Navbar from './components/navbar';

function App() {
  return (
    <div className='page-container min-h-screen flex flex-col'>
      <header className='w-full top-0 h-16'>
        <Navbar />
      </header>
      <main role='main' className='flex-1'>
        <FaRobot />
        <h1>This is the main content</h1>
      </main>
    </div>
  )
}

export default App
