import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Plans', href: '#plans' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Dumbbell className="text-accent" size={32} />
                        <span className="font-heading font-black text-xl tracking-wider uppercase text-white">Classic<span className="text-accent">Energy</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-accent font-medium text-sm transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#plans" className="px-6 py-2 bg-accent/10 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]">
                            Join Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent transition">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-white/10"
                >
                    <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-300 hover:text-accent font-semibold text-lg transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#plans"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 inline-block px-8 py-3 bg-accent text-primary rounded-full font-bold shadow-neon"
                        >
                            Join Now
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
