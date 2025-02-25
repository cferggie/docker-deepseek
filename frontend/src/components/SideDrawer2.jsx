import { LuTableOfContents } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useState, useEffect } from 'react';

function SideDrawer2() {
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await fetch('http://localhost:5000/messages');
                const data = await response.json();
                setChatHistory(data);
            } catch (err) {
                console.error('Error fetching chat history:', err);
            }
        };
        fetchChatHistory();
    }, []);

    return (
        <aside className="h-screen w-80 bg-base-200">
            <nav className="h-full flex flex-col">
                <div className="flex justify-between items-center pl-2.5">
                    <button className="btn btn-ghost btn-circle">
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
                        {chatHistory.today.map(chat => (
                            <li key={chat.id}><a className="pl-8 text-sm">{chat.title}</a></li>
                        ))}

                        <li className="menu-title pt-2">
                            <span>Yesterday</span>
                        </li>
                        {chatHistory.yesterday.map(chat => (
                            <li key={chat.id}><a className="pl-8 text-sm">{chat.title}</a></li>
                        ))}

                        <li className="menu-title pt-2">
                            <span>Last 7 Days</span>
                        </li>
                        {chatHistory.lastWeek.map(chat => (
                            <li key={chat.id}><a className="pl-8 text-sm">{chat.title}</a></li>
                        ))}

                        <li className="menu-title pt-2">
                            <span>Older</span>
                        </li>
                        {chatHistory.older.map(chat => (
                            <li key={chat.id}><a className="pl-8 text-sm">{chat.title}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default SideDrawer2;
