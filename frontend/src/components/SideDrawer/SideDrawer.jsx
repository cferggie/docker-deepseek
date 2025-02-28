import { LuTableOfContents } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useState, useEffect } from 'react';

function SideDrawer({ isOpen, onClose }) {
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await fetch('http://localhost:5000/messages', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Description': 'retrieve chat history',
                        'Context': 'chat-history',
                    },
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Chat history:', data);
                setChatHistory(data);
            } catch (err) {
                console.error('Error fetching chat history:', err);
            }
        };
        fetchChatHistory();
    }, []);

    return (
        <aside className={`fixed top-0 left-0 h-screen w-64 bg-base-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="h-full flex flex-col">
                <div className="flex justify-between items-center pl-2.5 pt-2">
                    <button className="btn btn-ghost btn-circle" onClick={onClose}>
                        <LuTableOfContents size={22} />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <LuSearch size={22} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ul className="menu menu-vertical">
                        <li><a><BsChatLeftText size={16} /> Chat</a></li>
                        <li className="flex justify-between"><a><FiFolder size={16}/>Projects</a></li>

                        {/* Chat History Sections */}
                        <li className="menu-title pt-4">
                            <span>Today</span>
                        </li>

                        {chatHistory.map((chat, index) => (
                            <li key={chat.id || index}>
                                <a>{chat.content || 'No content'}</a>
                            </li>
                        ))}

                        <li className="menu-title pt-2">
                            <span>Yesterday</span>
                        </li>

                        <li className="menu-title pt-2">
                            <span>Last 7 Days</span>
                        </li>

                        <li className="menu-title pt-2">
                            <span>Older</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default SideDrawer;