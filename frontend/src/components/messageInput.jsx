import {useState} from 'react';

function MessageInput() {
    const [val, setVal] = useState('Ask Anything');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!val.trim()) {
            alert('Please enter a message');
            return;
        }

        setIsLoading(true);
        try {
            console.log('Sending message:', val); // Debug log
            
            const response = await fetch('http://localhost:5000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: val,
                    conversation_id: 'default'
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
        <div className='message-input'>
            <input 
                type='text' 
                value={val} 
                onChange={handleChange}
                disabled={isLoading}
            />
            <button 
                onClick={sendMessage} 
                disabled={isLoading}
            >
                {isLoading ? 'Sending...' : 'Send'}
            </button>
        </div>
    );
}

export default MessageInput;
    
    
