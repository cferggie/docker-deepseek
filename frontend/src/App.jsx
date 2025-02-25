import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import MessageInput from './components/messageInput';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  return (
    <div className='flex min-h-screen'>
      <SideDrawer isOpen={isSideDrawerOpen} onClose={toggleSideDrawer} />
      <div className={`flex-1 flex flex-col transition-transform duration-300 ease-in-out ${isSideDrawerOpen ? 'ml-64' : 'ml-0'}`}>
        <header className='w-full h-16'>
          <Navbar onMenuClick={toggleSideDrawer} />
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
