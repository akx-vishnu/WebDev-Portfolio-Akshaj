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

            <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                        About
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card p-8 rounded-2xl border border-gray-700/50 shadow-card">
                            <p className="text-lg leading-relaxed text-gray-300">
                                I’m a <strong className="text-white">B.Sc. Computer Science graduate</strong> and a versatile <strong className="text-neon-blue">AI-Native Full Stack Developer</strong> building modern, high-performance web applications. I specialize in React and integrated full-stack architectures, creating fast, scalable, and visually engaging digital experiences from frontend to backend.
                            </p>
                            <br />
                            <p className="text-lg leading-relaxed text-gray-300">
                                I build end-to-end web applications that combine <strong className="text-neon-blue">elegant UI</strong> with <strong className="text-neon-purple">solid backend architecture</strong>. My work spans AI-integrated tools, real-time systems, and client-facing products across various domains.
                            </p>
                            
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    { icon: "🤖", title: "AI Integration", sub: "Groq / Llama-3, OCR" },
                                    { icon: "⚡", title: "Real-time", sub: "WebSockets, Socket.IO" },
                                    { icon: "🎨", title: "UI/UX Design", sub: "React, Framer Motion" },
                                    { icon: "🏗️", title: "Architecture", sub: "Microservices, REST" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-neon-blue/40 transition-colors group">
                                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 border border-neon-blue/20 rounded-xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue"></div>
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">🏆</span>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Paper Presenter — MESKCON 2026</h4>
                                        <p className="text-sm text-gray-400">Presented "EcoScan AI" at the International Conference organized by Kerala State Higher Education Council.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="glass-card p-8 rounded-2xl border border-gray-700/50 shadow-card">
                            <h3 className="text-xl font-bold text-neon-blue mb-6 border-b border-gray-800 pb-2 uppercase tracking-widest text-sm">Education</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white font-bold">B.Sc. Computer Science</h4>
                                        <span className="text-neon-blue font-mono text-sm">2023 – 2026</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">Yuvakshetra Institute of Management Studies, Palakkad (NAAC A)</p>
                                    <p className="text-gray-500 text-xs mt-1 italic">University of Calicut</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white font-bold">Class XII — CBSE</h4>
                                        <span className="text-neon-blue font-mono text-sm">2023</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">Bharathamatha CMI Public School · 86.2%</p>
                                    <p className="text-cyan-400/80 text-xs mt-1 font-mono">CS: 97/100 (A1)</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white font-bold">Class X — CBSE</h4>
                                        <span className="text-neon-blue font-mono text-sm">2021</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">Bharathamatha CMI Public School · 89.2%</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-gray-700/50 shadow-card">
                            <h3 className="text-xl font-bold text-neon-purple mb-6 border-b border-gray-800 pb-2 uppercase tracking-widest text-sm">Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: "English", level: "Professional" },
                                    { name: "Malayalam", level: "Native" },
                                    { name: "Tamil", level: "Intermediate" },
                                    { name: "Hindi", level: "Elementary" }
                                ].map((lang, idx) => (
                                    <div key={idx} className="px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-800 border-l-2 border-l-neon-purple">
                                        <span className="text-white text-sm font-bold block">{lang.name}</span>
                                        <span className="text-gray-500 text-[10px] uppercase tracking-tighter">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
