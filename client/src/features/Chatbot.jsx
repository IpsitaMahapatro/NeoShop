import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: `Searching for: ${input}` };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button className="bg-indigo-600 p-3 rounded-full" onClick={() => setOpen(!open)}>
        <FaRobot className="text-white text-xl" />
      </button>
      {open && (
        <div className="w-80 bg-gray-800 text-white p-4 rounded-lg mt-2 shadow-lg">
          <div className="h-60 overflow-y-auto mb-2">
            {messages.map((msg, i) => (
              <div key={i} className={`${msg.from === 'user' ? 'text-right' : 'text-left'} mb-1`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <input
            className="w-full p-2 rounded bg-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask something..."
          />
        </div>
      )}
    </div>
  );
}

export default Chatbot;