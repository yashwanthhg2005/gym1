import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#080808] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Dumbbell className="text-accent" size={32} />
                            <span className="font-heading font-black text-xl tracking-wider uppercase text-white">Classic<span className="text-accent">Energy</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The ultimate fitness destination in Chikamagaluru. Train with the best equipment and certified professionals to achieve your fitness goals.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
                            <li><a href="#plans" className="hover:text-accent transition-colors">Pricing Plans</a></li>
                            <li><a href="#trainers" className="hover:text-accent transition-colors">Trainers</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Gym Rules</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get tips and exclusive offers.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-[#111] px-4 py-2 rounded-l-lg border border-white/10 focus:border-accent outline-none text-white text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-primary font-bold px-4 py-2 rounded-r-lg hover:bg-[#2eaa10] transition-colors"
                            >
                                Go
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 text-center flex flex-col items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Classic Energy Fitness Gym. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2 flex items-center gap-1">
                        Engineered with passion for high performance.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
