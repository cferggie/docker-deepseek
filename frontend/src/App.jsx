import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import MessageInput from './components/messageInput';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 flex flex-col'>
        <header className='w-full h-16'>
          <SideDrawer />
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
