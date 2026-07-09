import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-primary/80 bg-gradient-to-b from-transparent to-primary"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block"
                >
                    Classic Energy Fitness Gym
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-tight mb-6"
                >
                    Unleash Your <br />
                    <span className="text-gradient">Inner Power</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
                >
                    Train Hard. Stay Strong. Achieve More. Join the ultimate fitness destination in Chikamagaluru.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#plans" className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#2eaa10] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.5)] group">
                        Start Your Journey
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                        Explore More
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Scroll down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-accent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
