import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
        { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
        { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
        { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
        { src: 'https://images.unsplash.com/photo-1627485055653-841cdb0e4a7a?q=80&w=1964&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
        { src: 'https://images.unsplash.com/photo-1583465584824-6997184ef1db?q=80&w=1935&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    ];

    return (
        <section className="py-24 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase mb-2"
                    >
                        Gallery
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        Explore the <span className="text-gradient">Facility</span>
                    </motion.h2>
                </div>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 md:auto-rows-[250px] gap-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.colSpan} ${img.rowSpan} h-48 md:h-auto`}
                            onClick={() => setSelectedImg(img.src)}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery image ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-accent w-12 h-12" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImg(null)}
                            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
                        >
                            <button
                                className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
                                onClick={() => setSelectedImg(null)}
                            >
                                <X size={40} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.5 }}
                                src={selectedImg}
                                alt="Enlarged gallery view"
                                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Gallery;
