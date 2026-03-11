import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaUniversity, FaUserTie, FaCalendarAlt, FaBoxOpen, FaProjectDiagram } from 'react-icons/fa';
import Services3D from './canvas/Services3D';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Landing Pages',
            icon: <FaLaptopCode size={40} className="text-neon-blue" />,
            description: 'High-converting, fast-loading landing pages built with React and Tailwind CSS to maximize your marketing campaigns.',
        },
        {
            id: 2,
            title: 'Business Websites',
            icon: <FaBusinessTime size={40} className="text-neon-purple" />,
            description: 'Professional websites for businesses of all sizes, featuring responsive layouts, SEO optimization, and easy content management.',
        },
        {
            id: 3,
            title: 'School / Institution Sites',
            icon: <FaUniversity size={40} className="text-green-400" />,
            description: 'Structured, informative, and accessible websites for educational institutions, designed to engage students and parents.',
        },
        {
            id: 4,
            title: 'Portfolio Sites',
            icon: <FaUserTie size={40} className="text-yellow-400" />,
            description: 'Personalized portfolio websites to showcase your skills, projects, and experience in a professional and visually appealing way.',
        },
        {
            id: 5,
            title: 'Event Pages',
            icon: <FaCalendarAlt size={40} className="text-red-400" />,
            description: 'Dynamic event pages with registration forms, schedules, and countdowns to build excitement and drive attendance.',
        },
        {
            id: 6,
            title: 'Product Showcases',
            icon: <FaBoxOpen size={40} className="text-purple-400" />,
            description: 'Attractive product showcase pages with high-quality images, detailed descriptions, and smooth animations to highlight features.',
        },
        {
            id: 7,
            title: 'College Projects',
            icon: <FaProjectDiagram size={40} className="text-pink-400" />,
            description: 'Assistance with college second year and final year projects, including documentation, coding, and implementation.',
        },
    ];

    return (
        <div
            name="services"
            className="w-full min-h-screen bg-transparent text-white py-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-200/50 z-0 pointer-events-none" />
            <Services3D />

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                        Services
                    </p>
                    <p className="py-6 text-gray-300">Here's what I can do for you</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {services.map(({ id, title, icon, description }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card shadow-lg shadow-neon-blue/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/5 duration-300 border border-gray-700/30"
                        >
                            <div className="mb-4 bg-white/5 p-4 rounded-full shadow-inner shadow-white/10">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
