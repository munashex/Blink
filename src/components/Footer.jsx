import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../theme/theme";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const links = [
    {id: "01", name: "Home", url: ''},
    {id: "02", name: "About", url: 'about'},
    {id: "03", name: "Work", url: 'work'},
    {id: "04", name: "Journal", url: "journal"},
    {id: "05", name: "Contact", url: "contact"}
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="mt-20">
      <div className={`p-7 lg:p-12 flex flex-col items-center gap-7 ${theme === 'dark' ? 'bg-[#202021]' : 'bg-[#171616] text-white'}`}>
        <h1 className="text-2xl lg:text-4xl font-bold">Let's create your next big idea.</h1>
        <Link 
          to="/contact" 
          className={`inline-flex py-3 px-6 rounded-full items-center gap-2 transition-all duration-300 hover:shadow-lg ${
            theme === 'light' 
              ? 'text-lg font-bold bg-white text-black hover:bg-gray-200' 
              : 'text-lg font-bold bg-[#2D2D2E] hover:bg-[#3D3D3E]'
          }`}
        >
          Contact us <FaArrowAltCircleRight size={24}/>
        </Link>
        <div className="mt-7 flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link 
              key={link.id}
              to={`/${link.url}`}
              className="hover:underline transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <span className="text-center my-5">© 2024 Blink</span>
      </div>
    </div>
  );
};

export default Footer;