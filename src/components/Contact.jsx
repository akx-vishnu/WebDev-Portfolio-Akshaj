import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {


    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const whatsappNumber = "919496202179";
        const text = `*New Contact Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
        setLoading(false);
        setStatus('SUCCESS');
        form.reset();
    };

    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-transparent p-4 text-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full relative z-10">
                <div className="pb-8 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                        Contact
                    </motion.p>
                    <p className="py-6 text-gray-300">Submit the form below to get in touch with me</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-10 justify-center items-start"
                >
                    {/* Left Column: Contact Info & Resume */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="glass-card p-8 rounded-2xl border border-gray-700/50">
                            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Let's Connect</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="flex flex-col gap-6">
                                <a href="mailto:akx_vishnu@pm.me" className="flex items-center gap-4 hover:text-neon-blue duration-300 group">
                                    <div className="bg-tertiary p-4 rounded-full group-hover:bg-neon-blue/20 group-hover:shadow-neon transition-all duration-300">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <span className="text-lg">akx_vishnu@pm.me</span>
                                </a>

                                <button 
                                    onClick={() => {
                                        window.open("/Resume - Akshaj V Nair.pdf", "_blank");
                                        const link = document.createElement('a');
                                        link.href = "/Resume - Akshaj V Nair.pdf";
                                        link.download = "Resume - Akshaj V Nair.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="flex items-center gap-4 hover:text-neon-blue duration-300 group text-left"
                                >
                                    <div className="bg-tertiary p-4 rounded-full group-hover:bg-neon-blue/20 group-hover:shadow-neon transition-all duration-300">
                                        <FaFileDownload size={20} />
                                    </div>
                                    <span className="text-lg">Download Resume</span>
                                </button>

                                <a href="https://in.linkedin.com/in/akx-vishnu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-neon-blue duration-300 group">
                                    <div className="bg-tertiary p-4 rounded-full group-hover:bg-neon-blue/20 group-hover:shadow-neon transition-all duration-300">
                                        <FaLinkedin size={20} />
                                    </div>
                                    <span className="text-lg">LinkedIn Profile</span>
                                </a>

                                <a href="https://github.com/akx-vishnu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-neon-blue duration-300 group">
                                    <div className="bg-tertiary p-4 rounded-full group-hover:bg-neon-blue/20 group-hover:shadow-neon transition-all duration-300">
                                        <FaGithub size={20} />
                                    </div>
                                    <span className="text-lg">GitHub Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full md:w-1/2 glass-card p-8 rounded-2xl border border-gray-700/50">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full">
                            <div className="flex flex-col gap-2 mb-4">
                                <label className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    aria-label="Enter your name"
                                    className="p-4 bg-tertiary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    aria-label="Enter your email"
                                    className="p-4 bg-tertiary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon transition-all duration-300"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 mb-6">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Enter your message"
                                    aria-label="Enter your message"
                                    className="p-4 bg-tertiary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-neon transition-all resize-none duration-300"
                                    required
                                ></textarea>
                            </div>

                            <button
                                disabled={loading}
                                className={`text-white bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-4 rounded-lg hover:opacity-90 hover:scale-[1.02] duration-300 shadow-neon font-bold tracking-wide ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'SUCCESS' && (
                                <p className="text-green-400 mt-4 text-center font-medium">Redirecting to WhatsApp...</p>
                            )}
                            {status === 'ERROR' && (
                                <p className="text-red-400 mt-4 text-center font-medium">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div >
        </div >
    );
};

export default Contact;
