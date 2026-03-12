import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link, scroller } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'EcoScan AI',
            description: 'AI-powered food label analysis platform using Tesseract OCR and Groq Llama-3. Generates personalized health scores, eco impact ratings, and chatbot Q&A. Microservice architecture with FastAPI for OCR and Flask for main app logic. Presented at MESKCON International Conference 2026.',
            techStack: ['React', 'Flask', 'FastAPI', 'SQLAlchemy', 'Groq / Llama-3', 'Tesseract OCR', 'JWT Auth'],
            links: {
                github: 'https://github.com/akx-vishnu/EcoScan-AI',
            },
            featured: true,
        },
        {
            id: 2,
            title: 'RTS Fleet Manager',
            description: 'Real-time employee transportation & fleet management platform. Live vehicle tracking via WebSockets & Leaflet maps, admin dashboard, driver interface, roster/route/trip management, and audit logging.',
            techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Drizzle ORM', 'Three.js'],
            links: {
                github: 'https://github.com/akx-vishnu/rts-fleet-manager',
            },
        },
        {
            id: 3,
            title: 'Rudra Travel Service',
            description: 'Professional corporate transport website with pages for services, safety, fleet & clients. WhatsApp inquiry integration, Google Maps embed, responsive design with SEO meta management.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
            links: {
                github: 'https://github.com/akx-vishnu/rudratravelservice',
                demo: 'https://rudratravelservice.vercel.app/',
            },
        },
        {
            id: 4,
            title: 'LittleCloud Baby Wear',
            description: 'B2B digital showroom for a premium baby clothing brand. Real-time product search with auto-scroll, WhatsApp inquiry integration, fully configurable via TypeScript config file.',
            techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
            links: {
                github: 'https://github.com/akx-vishnu/littlecloud-clothingbrand',
                demo: 'https://littlecloud-clothingbrand.vercel.app/',
            },
        },
        {
            id: 5,
            title: 'Personal Portfolio',
            description: 'Reactive personal portfolio with Hero, About, Skills, Projects, and Services sections. Contact form integrated with Google Sheets via Apps Script for real-time message collection.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Google Apps Script'],
            links: {
                github: 'https://github.com/akx-vishnu/WebDev-Portfolio-Akshaj',
                demo: 'https://akshajvnair.vercel.app/',
            },
        },
        {
            id: 6,
            title: 'Peepul Tree School',
            description: 'Modern nature-themed school website with lightbox gallery, testimonials, animated timeline, Google Maps integration, WhatsApp contact form, and full SEO with JSON-LD structured data.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Helmet'],
            links: {
                github: 'https://github.com/akx-vishnu/Peepul-Tree-School',
                demo: 'https://peepul-tree-school.vercel.app/',
            },
        },
        {
            id: 7,
            title: 'AbsoluteMinds Library',
            description: 'Desktop library management system with full CRUD, user authentication, book circulation tracking, bulk CSV import/export, and auto database setup with a normalized 3-table MySQL schema.',
            techStack: ['Python', 'Tkinter', 'MySQL', 'PyMySQL', 'Pillow'],
            links: {
                github: 'https://github.com/akx-vishnu/AbsoluteMinds-Library-Management-System',
            },
        },
        {
            id: 8,
            title: 'Movie2Reel',
            description: 'Python CLI tool that splits long videos into 9:16 vertical reels for TikTok/Reels/Shorts. Auto-overlays title, part number & branding. Batch organizes output into uploadable folders.',
            techStack: ['Python', 'FFmpeg', 'CLI Tool'],
            links: {
                github: 'https://github.com/akx-vishnu/Movie2Reel',
            },
        },
        {
            id: 9,
            title: 'Text2Reel',
            description: 'Web app that converts custom text into short portrait MP4 videos (1080×1920) with smart text wrapping and dark aesthetic styling. Cloud-deployed on Render.',
            techStack: ['Flask', 'MoviePy', 'Pillow', 'Gunicorn', 'Render'],
            links: {
                github: 'https://github.com/akx-vishnu/Text2Reel-Basic',
            },
        }
    ];

    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const scrollTriggerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.project-card-wrapper');

        let totalScroll = 0;
        if (scrollContainerRef.current) {
            totalScroll = scrollContainerRef.current.scrollWidth - window.innerWidth;
        }

        const anim = gsap.to(sections, {
            x: () => -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    setIsAtEnd(self.progress > 0.98);
                },
                end: () => "+=" + scrollContainerRef.current.scrollWidth,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

        scrollTriggerRef.current = anim.scrollTrigger;
    }, { scope: containerRef });

    const handleScrollNext = () => {
        if (!isMobile || isAtEnd) {
            scroller.scrollTo('certifications', {
                smooth: true,
                duration: isMobile ? 500 : 3000,
                offset: -80
            });
            return;
        }

        const st = scrollTriggerRef.current;
        if (!st || !scrollContainerRef.current) return;

        const totalWidth = scrollContainerRef.current.scrollWidth;
        const visibleWidth = window.innerWidth;
        const maxHorizontalScroll = totalWidth - visibleWidth;

        // Current horizontal position based on progress
        const currentProgress = st.progress;
        const currentX = currentProgress * maxHorizontalScroll;

        // Approx step: card width (300px) + gap (24px)
        const step = 324;
        const nextX = Math.min(currentX + step, maxHorizontalScroll);

        // Find target vertical position
        // totalVerticalDist corresponds to the scroll distance defined in scrollTrigger end
        const totalVerticalDist = totalWidth; 
        const targetVerticalScroll = (nextX / maxHorizontalScroll) * totalVerticalDist + st.start;

        window.scrollTo({
            top: targetVerticalScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section
            name="projects"
            ref={containerRef}
            className="w-full h-[100dvh] min-h-[500px] bg-black-100 text-white relative overflow-hidden flex flex-col pt-24 md:pt-20 pb-4 md:pb-8"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-neon-blue/20 rounded-full blur-[100px]" />
            </div>

            {/* Static Header Elements */}
            <div className="w-full px-4 md:px-8 lg:px-[calc((100vw-1280px)/2+1rem)] z-[100] relative shrink-0">
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

            {/* Scroll Indicator for mobile/desktop */}
            <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-[100] cursor-pointer"
                onClick={handleScrollNext}
            >
                <div 
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{
                            y: (isMobile && !isAtEnd) ? 0 : [0, 8, 0],
                            x: (isMobile && !isAtEnd) ? [0, 4, 0] : 0
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-mono">
                            {(isMobile && !isAtEnd) ? 'Next' : 'Scroll'}
                        </span>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/5 bg-black/20 backdrop-blur-sm shadow-neon-blue/10">
                            {(isMobile && !isAtEnd) ? (
                                <HiOutlineChevronDoubleRight className="text-neon-blue text-xl" />
                            ) : (
                                <HiOutlineChevronDoubleDown className="text-neon-blue text-xl" />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
