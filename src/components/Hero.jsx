import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import Hero3D from './canvas/Hero3D';
import TechCanvas from './canvas/TechCanvas';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
    return (
        <div
            name="hero"
            className="relative min-h-screen h-auto md:h-screen w-full overflow-hidden bg-transparent"
        >
            {/* Background Starfield */}
            <div className="absolute inset-0 -top-12 h-[calc(100%+3rem)] z-0">
                <Hero3D />
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center h-full px-4 pt-24 md:pt-26 text-white z-10 relative">
                {/* Left Column: Text */}
                <div className="flex flex-col justify-start md:justify-center h-auto md:h-full w-full md:w-1/2 pointer-events-none mb-8 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="pointer-events-auto bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl border border-white/5 md:border-none shadow-2xl md:shadow-none"
                    >
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-neon-blue text-sm md:text-base font-semibold tracking-wider uppercase bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 backdrop-blur-sm shadow-neon">
                                    <FaMapMarkerAlt className="inline mr-1 mb-0.5" /> Kochi, India
                                </span>
                                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono uppercase tracking-wider">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                                    Available for opportunities
                                </div>
                            </div>
                        </div>

                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">AKSHAJ V NAIR</span>
                        </h2>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">
                            <span className="text-neon-blue">Full Stack Developer</span> | Building scalable web systems
                        </h3>

                        <p className="text-gray-200 py-2 max-w-lg text-lg leading-relaxed">
                            Full Stack Developer crafting end-to-end web solutions from AI-powered applications to real-time industrial platforms. Passionate about architecture and elegant UIs.
                        </p>

                        {/* Stats Section */}
                        <div className="flex gap-8 mt-2 mb-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">9</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Projects</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">10</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Certs</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">4</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Experience</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <MagneticButton>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={2750}
                                    offset={-80}
                                    className="group text-white w-fit px-8 py-3 flex items-center rounded-full bg-gradient-to-r from-neon-blue to-accent cursor-pointer hover:shadow-neon duration-300 transition-all shadow-[0_4px_15px_rgba(0,183,255,0.3)]"
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
                <div className="w-full md:w-1/2 h-[40vh] md:h-full flex items-center justify-center relative z-20 -mt-8 md:-mt-16">
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

            {/* Scroll Indicator for mobile/desktop */}
            <div className="absolute bottom-[35vh] md:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center z-[100]">
                <Link
                    to="about"
                    smooth={true}
                    duration={1500}
                    offset={-80}
                    className="cursor-pointer"
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1 font-mono md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            Scroll
                        </span>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 glass-effect shadow-neon-blue/20">
                            <HiOutlineChevronDoubleDown className="text-neon-blue text-2xl" />
                        </div>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
