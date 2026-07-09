import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Trainers = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const trainers = [
        {
            name: 'Vikram Singh',
            specialty: 'Head Coach',
            image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop'
        },
        {
            name: 'Rahul Sharma',
            specialty: 'Strength Expert',
            image: 'https://images.unsplash.com/photo-1583465584824-6997184ef1db?q=80&w=1935&auto=format&fit=crop'
        },
        {
            name: 'Priya Patel',
            specialty: 'Cardio & Agility',
            image: 'https://images.unsplash.com/photo-1627485055653-841cdb0e4a7a?q=80&w=1964&auto=format&fit=crop'
        }
    ];

    return (
        <section id="trainers" className="py-24 bg-primary/50 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase mb-2"
                    >
                        Expert Trainers
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        Meet Your <span className="text-gradient">Mentors</span>
                    </motion.h2>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-12">
                    {trainers.map((trainer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-accent transition-all duration-500 [perspective:1000px]">
                                <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">

                                    {/* Front Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                                        <img
                                            src={trainer.image}
                                            alt={trainer.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary/95 flex flex-col items-center justify-center border border-white/10 rounded-full glass">
                                        <p className="font-heading font-black text-xl mb-4 text-white">Follow</p>
                                        <div className="flex gap-4">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                                <Instagram size={18} />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                                <Twitter size={18} />
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                                <Facebook size={18} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-1">{trainer.name}</h3>
                            <p className="text-accent tracking-widest uppercase text-sm font-semibold">{trainer.specialty}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Trainers;
