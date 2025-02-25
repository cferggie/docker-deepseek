import {useState} from 'react';

function MessageInput() {
    const [val, setVal] = useState('Ask Anything');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState('default'); // This will have to be configured to grab the conversation id from the database

    const sendMessage = async () => {
        if (!val.trim()) {
            alert('Please enter a message');
            return;
        }

        setIsLoading(true);
        try {
            console.log('Sending message:', val); // Debug log
            
            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: val,
                    conversation_id: conversationId
                })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            console.log('Message sent successfully:', data); // Debug log
            setVal('');
            
        } catch (error) {
            console.error('Error details:', error); // More detailed error logging
            alert(`Failed to send message: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleChange = (event) => {
        setVal(event.target.value);
    }

    return (
        <div className='fixed bottom-0 w-full max-w-4xl mx-auto p-4'>
            <div className='flex gap-2 items-center'>
                <input 
                    type='text' 
                    value={val} 
                    onChange={handleChange}
                    disabled={isLoading}
                    className='flex-1 input input-bordered w-full'
                    placeholder='Ask anything...'
                />
                <button 
                    onClick={sendMessage} 
                    disabled={isLoading}
                    className='btn btn-primary'
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
}

export default MessageInput;
    
    
