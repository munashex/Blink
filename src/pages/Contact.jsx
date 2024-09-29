import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme/theme";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme === 'dark' ? 'dark' : 'light',
    });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mt-11 lg:mt-20 animate-fade-dowm">
      <div className={`p-7 lg:p-12 rounded-xl ${theme === 'dark' ? 'bg-[#202021] text-white' : 'bg-gray-100 text-[#171616]'}`}>
        <div className="flex flex-col gap-y-7 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-semibold text-xl lg:text-2xl text-center">Prefer text instead?</h2>
            <h1 className="font-bold text-2xl lg:text-4xl text-center">Send me a message, I'll reply within 12 hours</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`p-3 rounded-xl w-full focus:outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-[#2D2D2E] focus:ring-white'
                  : 'bg-white focus:ring-[#171616]'
              }`}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-3 rounded-xl w-full focus:outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-[#2D2D2E] focus:ring-white'
                  : 'bg-white focus:ring-[#171616]'
              }`}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`h-60 w-full p-3 rounded-xl resize-none focus:outline-none focus:ring-2 ${
                theme === 'dark'
                  ? 'bg-[#2D2D2E] focus:ring-white'
                  : 'bg-white focus:ring-[#171616]'
              }`}
              required
            />
            <button
              type="submit"
              className={`py-3 px-6 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-white text-[#171616] hover:bg-gray-200'
                  : 'bg-[#171616] text-white hover:bg-[#2D2D2E]'
              }`}
            >
              Send message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;