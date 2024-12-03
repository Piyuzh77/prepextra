import React from 'react';
import { Github, GlobeIcon, Linkedin,  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-siteLavender p-4 mt-24">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center">
          &copy; {new Date().getFullYear()} Piyush Gupta. All rights reserved.
        </p>
        <p className="mb-4 text-center text-siteLavender">
          This site is non-profit. Any commercial use is strictly prohibited and <br/>I dont really care what you do with it just dont over work yourself, its going to get better 💟.
          <br/> If anything is bothering you dm me on Linkedin lets understand the world together 🕊️
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/piyush-gupta-298464212/" target="_blank" rel="noopener noreferrer" className="hover:text-siteYellow transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://piyuzh77.github.io/PortfolioDisplay/" target="_blank" rel="noopener noreferrer" className="hover:text-siteYellow transition-colors duration-300">
            <GlobeIcon size={24} />
          </a>
          <a href="https://github.com/Piyuzh77" target="_blank" rel="noopener noreferrer" className="hover:text-siteYellow transition-colors duration-300">
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
