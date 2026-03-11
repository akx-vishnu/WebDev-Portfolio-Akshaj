import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            date: "APR 2025 – MAY 2025",
            role: "Python Programming Intern",
            company: "ITBG, KELTRON, Palakkad",
            description: "Completed an intensive 2-week program covering Python programming, data structures, and GUI development using Tkinter at KELTRON's facility in Palakkad.",
            icon: "🐍"
        },
        {
            date: "OCT 2024 – NOV 2024",
            role: "Web Development Intern",
            company: "Corizo",
            description: "Completed a one-month web development training and internship program covering modern web technologies and full-stack development practices.",
            icon: "💻"
        },
        {
            date: "SEP 2024 – OCT 2024",
            role: "Cybersecurity Intern",
            company: "Corizo",
            description: "Completed a one-month cybersecurity training and internship program covering core security concepts, threat analysis, and industry best practices.",
            icon: "🔒"
        },
        {
            date: "MAR 2023 – MAY 2024",
            role: "Data Entry Operator (Part-time)",
            company: "Rudra Travel Service, Coimbatore",
            description: "Managed high-volume data entry, client records, and spreadsheet maintenance using Microsoft Excel and Google Sheets across a 14-month engagement.",
            icon: "📊"
        }
    ];

    return (
        <div 
            ref={sectionRef}
            name="experience" 
            className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden"
        >
             {/* Background Glow */}
             <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-12">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple uppercase tracking-wider"
                    >
                        Experience
                    </motion.p>
                    <p className="py-6 text-gray-400 text-lg">My professional journey and roles</p>
                </div>

                <div className="relative ml-4 md:ml-8">
                    {/* Background Static Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800/50" />
                    
                    {/* Animated Progress Line */}
                    <motion.div 
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent origin-top shadow-[0_0_15px_rgba(0,243,255,0.8)] z-0"
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mb-16 ml-12 relative group"
                        >
                            {/* Dot on the timeline */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.2, 
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20 
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="absolute -left-[59px] top-1.5 w-6 h-6 bg-gray-900 border-2 border-neon-blue rounded-full shadow-[0_0_15px_rgba(0,183,255,0.6)] z-10 group-hover:scale-125 group-hover:border-white transition-transform duration-300" 
                            >
                                <div className="absolute inset-0 rounded-full bg-neon-blue/20 animate-ping opacity-0 group-hover:opacity-100" />
                            </motion.div>
                            
                            <div className="glass-card p-8 rounded-2xl border border-gray-700/50 hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,183,255,0.1)] transition-all duration-500 transform group-hover:-translate-y-1">
                                <span className="text-neon-blue font-mono text-sm font-semibold block mb-2 tracking-tighter">{exp.date}</span>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{exp.icon}</span>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                                </div>
                                <h4 className="text-gray-400 font-semibold mb-4 text-lg">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
