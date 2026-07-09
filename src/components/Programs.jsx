import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Flame, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';

const Programs = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const programs = [
        {
            title: 'Weight Training',
            description: 'Build muscle and increase strength with our state-of-the-art free weights and machines.',
            icon: <Activity size={40} className="text-accent" />,
            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Fat Loss',
            description: 'High-intensity cardiovascular programs designed to burn calories and shed fat efficiently.',
            icon: <Flame size={40} className="text-accent" />,
            image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop'
        },
        {
            title: 'Strength & Conditioning',
            description: 'Enhance your athletic performance, agility, and overall physical endurance.',
            icon: <HeartPulse size={40} className="text-accent" />,
            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop'
        },
        {
            title: 'Personal Training',
            description: 'Get customized workout plans and 1-on-1 guidance from our certified fitness experts.',
            icon: <ShieldCheck size={40} className="text-accent" />,
            image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop'
        }
    ];

    return (
        <section id="programs" className="py-24 bg-primary/50 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase mb-2"
                    >
                        Our Programs
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        Explore Our <span className="text-gradient">Premium Fit</span>
                    </motion.h2>
                </div>

                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass hover:border-accent transition-colors duration-300"
                        >
                            {/* Background Image overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0">
                                <img src={program.image} alt={program.title} className="w-full h-full object-cover grayscale" />
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col items-start bg-gradient-to-t from-primary/90 to-transparent">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-neon">
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading">{program.title}</h3>
                                <p className="text-gray-400 mb-8 flex-grow">{program.description}</p>
                                <a href="#contact" className="text-white group-hover:text-accent font-semibold flex items-center gap-2 mt-auto transition-colors">
                                    Learn More <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Programs;
