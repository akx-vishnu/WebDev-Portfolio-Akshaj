import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-black-200 text-white py-8 border-t border-gray-800"
        >
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AKSHAJ V NAIR</h2>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://github.com/akx-vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-2xl hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://in.linkedin.com/in/akx-vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-2xl hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/akx_vishnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Profile"
                        className="text-gray-400 hover:text-neon-purple transition-colors duration-300 text-2xl hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                </div>

                <div
                    className="bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-full cursor-pointer hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
                    onClick={toggleHome}
                    aria-label="Scroll to top"
                    role="button"
                    tabIndex={0}
                >
                    <FaArrowUp className="text-white" />
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
