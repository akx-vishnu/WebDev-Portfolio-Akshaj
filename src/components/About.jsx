import React from 'react';
import { motion } from 'framer-motion';
import About3D from './canvas/About3D';

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden"
        >
            <div className="absolute top-[5%] right-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <About3D />

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                        About
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-2xl border border-gray-700/50 shadow-card z-10"
                >
                    <p className="text-lg md:text-xl mt-4 leading-relaxed text-gray-300">
                        I’m a B.Sc. Computer Science graduate building modern, high-performance web applications that look sharp and work flawlessly.
                        I specialize in React and contemporary frontend technologies, creating fast, scalable, and visually engaging digital experiences for real-world businesses.
                    </p>

                    <br />

                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                        I focus on clean architecture, smooth user interaction, and performance optimization.
                        Beyond traditional UI, I integrate 3D elements and immersive web interactions to make products feel dynamic without sacrificing speed or usability.
                        If it doesn’t run smoothly, it doesn’t ship.
                    </p>

                    <br />

                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                        I also leverage AI to build smarter applications — from intelligent automation and data-driven features to AI-powered analysis and interactive assistants.
                        I treat AI as a practical tool, not hype. It’s there to enhance functionality, improve user experience, and solve real problems.
                    </p>

                    <br />

                    <p className="text-xl font-semibold text-neon-blue">
                        My goal is simple: build digital products that feel modern, intuitive, and future-ready.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
