import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiMysql, SiFlask, SiFastapi, SiPostgresql, SiSqlite, SiNextdotjs, SiFramer, SiVercel, SiSocketdotio, SiRadixui, SiOpenai, SiPrisma, SiRedis, SiCplusplus, SiAstro } from 'react-icons/si';
import TiltCard from './ui/TiltCard';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Languages', 'Frontend', 'Backend', 'AI & Tools'];

    const skills = [
        { id: 1, name: 'Python', icon: <FaPython className="text-yellow-400" />, category: 'Languages' },
        { id: 2, name: 'JavaScript', icon: <span className="font-bold text-yellow-500 text-2xl">JS</span>, category: 'Languages' },
        { id: 3, name: 'TypeScript', icon: <span className="font-bold text-blue-500 text-2xl">TS</span>, category: 'Languages' },
        { id: 4, name: 'React', icon: <FaReact className="text-cyan-400" />, category: 'Frontend' },
        { id: 5, name: 'Next.js', icon: <SiNextdotjs className="text-white" />, category: 'Frontend' },
        { id: 6, name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, category: 'Backend' },
        { id: 7, name: 'NestJS', icon: <SiNextdotjs className="text-red-500" />, category: 'Backend' },
        { id: 8, name: 'Flask', icon: <SiFlask className="text-white" />, category: 'Backend' },
        { id: 9, name: 'FastAPI', icon: <SiFastapi className="text-teal-500" />, category: 'Backend' },
        { id: 10, name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, category: 'Backend' },
        { id: 11, name: 'MySQL', icon: <SiMysql className="text-blue-500" />, category: 'Backend' },
        { id: 12, name: 'SQLite', icon: <SiSqlite className="text-blue-300" />, category: 'Backend' },
        { id: 13, name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" />, category: 'Frontend' },
        { id: 14, name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, category: 'Frontend' },
        { id: 15, name: 'Groq/Llama-3', icon: <SiOpenai className="text-orange-500" />, category: 'AI & Tools' },
        { id: 16, name: 'Docker', icon: <FaDocker className="text-blue-500" />, category: 'AI & Tools' },
        { id: 17, name: 'Vercel', icon: <SiVercel className="text-white" />, category: 'AI & Tools' },
        { id: 18, name: 'Git', icon: <FaGitAlt className="text-orange-600" />, category: 'AI & Tools' },
        { id: 19, name: 'Flutter', icon: <SiFlutter className="text-cyan-500" />, category: 'Frontend' },
        { id: 20, name: 'Java', icon: <FaJava className="text-red-500" />, category: 'Languages' },
        { id: 21, name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, category: 'Languages' },
        { id: 22, name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, category: 'Languages' },
        { id: 23, name: 'Socket.IO', icon: <SiSocketdotio className="text-white" />, category: 'Backend' },
        { id: 24, name: 'Radix UI', icon: <SiRadixui className="text-purple-400" />, category: 'Frontend' },
        { id: 25, name: 'Cursor', icon: <span className="font-bold text-blue-400 text-2xl">CR</span>, category: 'AI & Tools' },
        { id: 26, name: 'Claude Code', icon: <span className="font-bold text-orange-400 text-2xl">CC</span>, category: 'AI & Tools' },
        { id: 27, name: 'GitHub Copilot', icon: <span className="font-bold text-white text-2xl">CP</span>, category: 'AI & Tools' },
        { id: 28, name: 'Google Antigravity', icon: <span className="font-bold text-blue-500 text-2xl">GA</span>, category: 'AI & Tools' },
        { id: 29, name: 'Prisma', icon: <SiPrisma className="text-white" />, category: 'Backend' },
        { id: 30, name: 'Redis', icon: <SiRedis className="text-red-500" />, category: 'Backend' },
        { id: 31, name: 'C++', icon: <SiCplusplus className="text-blue-400" />, category: 'Languages' },
        { id: 32, name: 'Astro', icon: <SiAstro className="text-orange-500" />, category: 'Frontend' }
    ];

    const filteredSkills = activeTab === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    return (
        <div
            name="skills"
            className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue"
                    >
                        Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="py-6 text-gray-400 text-lg"
                    >
                        Technologies I work with
                    </motion.p>
                </div>

                {/* Categories Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                                activeTab === category
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                            }`}
                        >
                            {activeTab === category && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full -z-10 shadow-[0_0_15px_rgba(0,183,255,0.4)]"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map(({ id, name, icon }) => (
                            <motion.div
                                key={id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <TiltCard className="w-full h-full rounded-xl glass-card hover:shadow-[0_0_20px_rgba(189,101,255,0.15)] cursor-pointer group">
                                    <div className="flex flex-col items-center justify-center p-6 w-full h-full group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-4xl mb-3 group-hover:scale-110 duration-300 select-none flex items-center justify-center h-12 w-12">{icon}</div>
                                        <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">{name}</p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
