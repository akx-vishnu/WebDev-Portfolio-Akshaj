import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let rafId = null;
        const handleScroll = () => {
            if (rafId) return; // already scheduled
            rafId = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 50);
                rafId = null;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const links = [
        { id: 1, link: 'about' },
        { id: 2, link: 'skills' },
        { id: 3, link: 'experience' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'certifications' },
        { id: 6, link: 'services' },
        { id: 7, link: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md shadow-neon border-b border-gray-800/50' : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 md:px-12 text-white">
                <div>
                    <h1 className="text-3xl font-bold font-signature ml-2 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-transform duration-300">
                        <Link to="hero" smooth={true} duration={500}>
                            Akshaj
                        </Link>
                    </h1>
                </div>

                <ul className="hidden md:flex items-center">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 hover:text-neon-blue hover:shadow-neon-sm duration-300"
                        >
                            <Link to={link} smooth={true} duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li className="ml-4 px-4 py-2 rounded-full border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300 cursor-pointer text-sm font-bold">
                        <a href="/minimalist.html">Minimalist</a>
                    </li>
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden hover:text-neon-blue transition-colors duration-200"
                    aria-label="Toggle navigation"
                    role="button"
                    tabIndex={0}
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                <AnimatePresence>
                    {nav && (
                        <motion.ul
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black-100/95 backdrop-blur-xl text-gray-300 z-40"
                        >
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-neon-purple duration-200"
                                >
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        to={link}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                            <li className="px-4 py-6 text-4xl text-neon-purple font-bold hover:scale-110 transition-transform">
                                <a href="/minimalist.html" onClick={() => setNav(!nav)}>Minimalist</a>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
