import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaWindowMaximize, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiMysql, SiFlask, SiMicrosoftexcel, SiFastapi, SiMicrosoftword, SiMicrosoftpowerpoint, SiPostgresql, SiSqlite, SiNextdotjs, SiVite, SiFramer, SiVercel, SiNgrok, SiSocketdotio, SiRadixui, SiOpenai, SiPrisma, SiRedis, SiCplusplus, SiAstro } from 'react-icons/si';
import SkillSphere from './canvas/SkillSphere';
import TiltCard from './ui/TiltCard';
import MagneticButton from './ui/MagneticButton';
const Skills = () => {
    const skills = [
        { id: 1, name: 'Python', icon: <FaPython className="text-yellow-400" /> },
        { id: 2, name: 'JavaScript', icon: <span className="font-bold text-yellow-500 text-3xl">JS</span> },
        { id: 3, name: 'TypeScript', icon: <span className="font-bold text-blue-500 text-3xl">TS</span> },
        { id: 4, name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { id: 5, name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { id: 6, name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { id: 7, name: 'NestJS', icon: <SiNextdotjs className="text-red-500" /> },
        { id: 8, name: 'Flask', icon: <SiFlask className="text-white" /> },
        { id: 9, name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
        { id: 10, name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { id: 11, name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
        { id: 12, name: 'SQLite', icon: <SiSqlite className="text-blue-300" /> },
        { id: 13, name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
        { id: 14, name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
        { id: 15, name: 'Groq/Llama-3', icon: <SiOpenai className="text-orange-500" /> },
        { id: 16, name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { id: 17, name: 'Vercel', icon: <SiVercel className="text-white" /> },
        { id: 18, name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { id: 19, name: 'Flutter', icon: <SiFlutter className="text-cyan-500" /> },
        { id: 20, name: 'Java', icon: <FaJava className="text-red-500" /> },
        { id: 21, name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { id: 22, name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { id: 23, name: 'Socket.IO', icon: <SiSocketdotio className="text-white" /> },
        { id: 24, name: 'Radix UI', icon: <SiRadixui className="text-purple-400" /> },
        { id: 25, name: 'Cursor', icon: <span className="font-bold text-blue-400 text-3xl">CR</span> },
        { id: 26, name: 'Claude Code', icon: <span className="font-bold text-orange-400 text-3xl">CC</span> },
        { id: 27, name: 'GitHub Copilot', icon: <span className="font-bold text-white text-3xl">CP</span> },
        { id: 28, name: 'Google Antigravity', icon: <span className="font-bold text-blue-500 text-3xl">GA</span> },
        { id: 29, name: 'Prisma', icon: <SiPrisma className="text-white" /> },
        { id: 30, name: 'Redis', icon: <SiRedis className="text-red-500" /> },
        { id: 31, name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
        { id: 32, name: 'Astro', icon: <SiAstro className="text-orange-500" /> }
    ];

    return (
        <div
            name="skills"
            className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue"
                    >
                        Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="py-6 text-gray-400 text-lg"
                    >
                        Technologies I work with
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* 3D Sphere - hidden on mobile to prevent scroll blocking */}
                    <div className="hidden md:block w-full md:w-1/2 h-[500px]">
                        <SkillSphere skills={skills} />
                    </div>

                    {/* Text Grid Fallback / Complement (Hidden on mobile if desired, or kept as list) */}
                    {/* Let's keep a sleek grid for better readability as well, or just skills list */}
                    <div className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
                        {skills.map(({ id, name, icon }) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <MagneticButton className="w-full h-full">
                                    <TiltCard className="w-full h-full rounded-xl glass-card hover:shadow-neon cursor-pointer group">
                                        <div className="flex flex-col items-center justify-center p-4 w-full h-full group-hover:-translate-y-2 transition-transform duration-300">
                                            <div className="text-4xl mb-2 group-hover:scale-110 duration-300">{icon}</div>
                                            <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{name}</p>
                                        </div>
                                    </TiltCard>
                                </MagneticButton>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
