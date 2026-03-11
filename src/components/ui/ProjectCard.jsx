import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const { title, description, techStack, links, status } = project;

    return (
        <div className="group w-[300px] md:w-[380px] lg:w-[400px] h-full flex-shrink-0 relative [perspective:1500px] z-10 hover:z-50 pointer-events-auto">
            <div className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-2xl cursor-default pointer-events-auto">

                {/* Front side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl p-5 md:p-8 bg-gradient-to-b from-tertiary to-[#161b22] border border-gray-700/50 flex flex-col items-center overflow-hidden z-20">
                    {/* Decorative ambient gradients */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-neon-blue/20 rounded-full blur-[50px] group-hover:bg-neon-blue/30 transition-colors duration-1000"></div>
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-neon-purple/20 rounded-full blur-[50px] group-hover:bg-neon-purple/30 transition-colors duration-1000"></div>

                    {/* Centered Content Container */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center w-full z-10 space-y-2 md:space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-neon-blue group-hover:to-neon-purple transition-colors duration-500 tracking-wide">{title}</h3>
                        <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-4 mx-auto max-w-[90%]">
                            {description}
                        </p>
                    </div>

                    {/* Bottom Prompt */}
                    <div className="mt-auto pt-4 z-10 w-full flex justify-center pb-1">
                        <div className="text-neon-blue text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium animate-pulse px-4 md:px-6 py-2 rounded-full bg-neon-blue/5 border border-neon-blue/20 backdrop-blur-sm group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,195,255,0.05)] group-hover:shadow-[0_0_20px_rgba(0,195,255,0.2)]">
                            Hover to explore
                        </div>
                    </div>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl p-5 md:p-8 bg-tertiary border border-neon-blue flex flex-col shadow-neon [transform:rotateY(180deg)] z-30 pointer-events-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-neon-blue mb-2 md:mb-4">{title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow font-light leading-relaxed text-xs md:text-sm overflow-y-auto custom-scrollbar pr-2 pointer-events-auto">
                        {description}
                    </p>

                    {status && (
                        <p className="text-[10px] md:text-xs text-yellow-400 mb-2 italic flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                            {status}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8 [transform-style:preserve-3d]">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 rounded-full bg-black-200 text-neon-blue border border-gray-700 transition-transform duration-700 delay-100 group-hover:[transform:translateZ(40px)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 md:gap-4 mt-auto [transform-style:preserve-3d] pointer-events-auto">
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-600 hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 flex items-center justify-center gap-2 transition-transform duration-700 font-semibold group-hover:[transform:translateZ(50px)] delay-200 pointer-events-auto cursor-pointer relative z-50"
                        >
                            <FaGithub size={18} /> Code
                        </a>
                        {links.demo && (
                            <a
                                href={links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-primary font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-blue/30 transition-transform duration-700 group-hover:[transform:translateZ(50px)] delay-200 pointer-events-auto cursor-pointer relative z-50"
                            >
                                <FaExternalLinkAlt size={16} /> Live
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
