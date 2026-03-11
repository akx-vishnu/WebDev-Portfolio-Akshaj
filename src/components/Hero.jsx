import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Hero3D from './canvas/Hero3D';
import TechCanvas from './canvas/TechCanvas';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
    return (
        <div
            name="hero"
            className="relative h-screen w-full overflow-hidden bg-transparent"
        >
            {/* Background Starfield */}
            <Hero3D />

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 text-white z-10 relative">
                {/* Left Column: Text */}
                <div className="flex flex-col justify-center h-full w-full md:w-1/2 pt-20 md:pt-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="pointer-events-auto"
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-neon-blue text-sm md:text-base font-semibold tracking-wider uppercase bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 backdrop-blur-sm shadow-neon">
                                <FaMapMarkerAlt className="inline mr-1 mb-0.5" /> India
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AKSHAJ V NAIR</span>
                        </h2>
                        <h3 className="text-xl sm:text-3xl font-semibold text-gray-300 mb-6">
                            Modern Web Developer | React Specialist
                        </h3>

                        <p className="text-gray-400 py-4 max-w-lg text-lg leading-relaxed">
                            Crafting high-performance, UI/UX-focused React experiences for real-world businesses.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <MagneticButton>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="group text-white w-fit px-8 py-3 flex items-center rounded-full bg-gradient-to-r from-neon-blue to-accent cursor-pointer hover:shadow-neon duration-300"
                                >
                                    View Projects
                                    <span className="group-hover:rotate-90 duration-300">
                                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                    </span>
                                </Link>
                            </MagneticButton>

                            <MagneticButton>
                                <button
                                    onClick={() => {
                                        window.open("/Resume - Akshaj V Nair.pdf", "_blank");
                                        const link = document.createElement('a');
                                        link.href = "/Resume - Akshaj V Nair.pdf";
                                        link.download = "Resume - Akshaj V Nair.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="group text-white w-fit px-8 py-3 flex items-center rounded-full border border-gray-500 hover:border-neon-purple hover:text-neon-purple hover:bg-gray-800/30 cursor-pointer duration-300"
                                >
                                    View Resume
                                </button>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: 3D Tech Object */}
                <div className="w-full md:w-1/2 h-[40vh] md:h-full flex items-center justify-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full h-full"
                    >
                        <TechCanvas />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
