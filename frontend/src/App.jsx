import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRobot } from "react-icons/fa";
import Navbar from './components/navbar';
import MessageInput from './components/messageInput';
import SideDrawer from './components/SideDrawer';
import SideDrawer2 from './components/SideDrawer2';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className='flex min-h-screen'>
      {/* <SideDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
      
      {/* Main content container including navbar */}
      <div className='flex-1 flex flex-col'>
        <header className='w-full h-16'>
          <SideDrawer2 />
        </header>
        <main role='main' className='flex-1'>
          <div className='flex flex-col h-full justify-center items-center'>
            <MessageInput />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
