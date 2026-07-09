import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, UserCheck, Award, Target } from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const stats = [
        { icon: <Users size={32} />, count: '2000+', label: 'Happy Members' },
        { icon: <UserCheck size={32} />, count: '25+', label: 'Expert Trainers' },
        { icon: <Award size={32} />, count: '10+', label: 'Years Experience' },
        { icon: <Target size={32} />, count: '50+', label: 'Fitness Programs' },
    ];

    return (
        <section id="about" className="py-24 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow- neon group">
                            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                                alt="Gym Interior"
                                className="w-full h-[600px] object-cover rounded-2xl scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-10 -right-10 bg-primary border border-white/10 p-6 rounded-2xl shadow-xl glass z-20 hidden md:block">
                            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">10+</h3>
                            <p className="text-gray-400 font-bold uppercase tracking-wider text-sm mt-1">Years of<br />Excellence</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-accent font-bold tracking-widest uppercase mb-2">About Us</h4>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">
                            Transform Your Body, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Transform Your Life</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            At Classic Energy Fitness Gym, we're more than just a place to work out. We're a community dedicated to helping you achieve your ultimate fitness goals. Our state-of-the-art facility in Chikamagaluru features premium equipment, professional trainers, and an environment designed to inspire.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="text-accent p-3 bg-white/5 rounded-xl border border-white/5">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold font-heading">{stat.count}</h4>
                                        <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
