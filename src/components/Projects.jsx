import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'RTS Fleet Manager',
            description: 'A full-stack solution for transport operations. Key features: real-time vehicle tracking, automated route planning, driver/employee rostering, and trip analytics.',
            techStack: ['NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'Redis', 'Socket.IO', 'Leaflet'],
            links: {
                github: 'https://github.com/akx-vishnu/rts-fleet-manager',
            },
        },
        {
            id: 2,
            title: 'EcoScan AI',
            description: 'An AI-powered food analysis application that scans product labels to analyze ingredients, nutrition, and environmental impact, providing personalized health and eco scores.',
            techStack: ['React', 'Vite', 'Flask', 'FastAPI', 'SQLAlchemy', 'Tesseract OCR', 'Groq Llama-3'],
            links: {
                github: 'https://github.com/akx-vishnu/EcoScan-AI',
            },
        },
        {
            id: 3,
            title: 'Peepul Tree School',
            description: 'A modern, nature-themed school website designed to improve admissions engagement through clean UI, smooth animations, and structured content for parents. Uses framer-motion and Tailwind CSS.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            links: {
                github: 'https://github.com/akx-vishnu/Peepul-Tree-School',
                demo: 'https://peepul-tree-school.vercel.app/',
            },
        },
        {
            id: 4,
            title: 'LittleCloud Baby Wear',
            description: 'A premium React B2B portal for an organic baby clothing manufacturer. Features real-time search, category filtering, and direct WhatsApp integration for bulk inquiries. Offers high-performance aesthetics and a fully configurable content system via a central config file.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp API'],
            links: {
                github: 'https://github.com/akx-vishnu/littlecloud-clothingbrand',
                demo: 'https://littlecloud-clothingbrand.vercel.app/',
            },
        },
        {
            id: 5,
            title: 'Rudra Travel Service',
            description: 'A professional, safety-first corporate transport website for Coimbatore. Features responsive design, Framer Motion animations, and Google Sheets integration for reliable employee commute management. Trustworthy, punctual, and MSME registered service since 2014.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Google Sheets'],
            links: {
                github: 'https://github.com/akx-vishnu/rudratravelservice',
                demo: 'https://rudratravelservice.vercel.app/',
            },
        },
        {
            id: 6,
            title: 'WebDev Portfolio',
            description: 'A reactive personal portfolio website featuring smooth exit/entry scroll animations. Includes a contact form integrated with Google Sheets via Apps Script for seamless message collection.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            links: {
                github: 'https://github.com/akx-vishnu/WebDev-Portfolio-Akshaj',
                demo: 'https://akshajvnair.vercel.app/',
            },
        },
        {
            id: 7,
            title: 'AbsoluteMinds Library Management System',
            description: 'A full-featured desktop Library Management System built with Python, Tkinter, and MySQL. Manage books, users, and circulation — all from an intuitive GUI.',
            techStack: ['Python', 'Tkinter', 'MySQL'],
            links: {
                github: 'https://github.com/akx-vishnu/AbsoluteMinds-Library-Management-System',
            },
        },
        {
            id: 8,
            title: 'Movie2Reel',
            description: 'A powerful Python CLI tool to efficiently split long videos into multiple short 9:16 vertical parts (reels), adding dynamic text overlays.',
            techStack: ['Python', 'FFmpeg', 'Pillow'],
            links: {
                github: 'https://github.com/akx-vishnu/Movie2Reel',
            },
        },
        {
            id: 9,
            title: 'Text2Reel',
            description: 'A lightweight web application that takes custom text as input and generates a short, downloadable 18-second 9:16 video wrapped against an aesthetic background.',
            techStack: ['Python', 'Flask', 'MoviePy', 'JavaScript'],
            links: {
                github: 'https://github.com/akx-vishnu/Text2Reel-Basic',
            },
        }
    ];

    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.project-card-wrapper');

        let totalScroll = 0;
        if (scrollContainerRef.current) {
            totalScroll = scrollContainerRef.current.scrollWidth - window.innerWidth;
        }

        gsap.to(sections, {
            x: () => -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + scrollContainerRef.current.scrollWidth,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
    }, { scope: containerRef });

    return (
        <section
            name="projects"
            ref={containerRef}
            className="w-full h-[100dvh] min-h-[500px] bg-black-100 text-white relative overflow-hidden flex flex-col pt-12 md:pt-20 pb-4 md:pb-8"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-neon-blue/20 rounded-full blur-[100px]" />
            </div>

            {/* Static Header Elements */}
            <div className="w-full px-4 md:px-8 lg:px-[calc((100vw-1280px)/2+1rem)] z-[100] pointer-events-none shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold inline border-b-4 border-neon-blue text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple relative z-10">
                    Projects
                </h2>
            </div>

            {/* Scrollable Container */}
            <div className="relative w-full flex-grow flex items-center z-20 py-4">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 md:gap-16 px-8 md:px-[10vw] w-max items-center h-[55vh] min-h-[320px] max-h-[500px] will-change-transform"
                >
                    {projects.map((project) => (
                        <div key={project.id} className="project-card-wrapper h-full flex flex-col justify-center">
                            <ProjectCard project={project} />
                        </div>
                    ))}

                    {/* Spacer to push the last card away from the edge */}
                    <div className="project-card-wrapper w-[10vw] h-full flex-shrink-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
