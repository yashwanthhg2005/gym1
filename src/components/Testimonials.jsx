import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Arjun K.',
            role: 'Member for 2 years',
            image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop',
            text: 'Joining Classic Energy was the best decision I made. The trainers are incredibly supportive and the atmosphere naturally forces you to push past your limits.',
            rating: 5
        },
        {
            name: 'Nisha R.',
            role: 'Weight Loss Program',
            image: 'https://images.unsplash.com/photo-1574580218706-e77242ba4e12?q=80&w=1964&auto=format&fit=crop',
            text: 'Down 15kg in 6 months! The custom diet plans and one-on-one personal training completely changed my approach to fitness and health.',
            rating: 5
        },
        {
            name: 'Karthik S.',
            role: 'Powerlifter',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
            text: 'The free weights section is unmatched in Chikamagaluru. Top tier olympic lifting platforms and high quality plates.',
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-primary/50 relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase mb-2"
                    >
                        Transformations
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        Real Results, <span className="text-gradient">Real People</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="pb-16"
                    >
                        {testimonials.map((test, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12 glass relative">
                                    <Quote size={80} className="absolute top-4 right-8 text-white/5" />

                                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                        <img
                                            src={test.image}
                                            alt={test.name}
                                            className="w-24 h-24 rounded-full object-cover border-2 border-accent shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                                        />
                                        <div>
                                            <div className="flex justify-center md:justify-start gap-1 mb-4 text-accent">
                                                {[...Array(test.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                            </div>
                                            <p className="text-gray-300 text-lg md:text-xl italic mb-6">"{test.text}"</p>
                                            <h4 className="text-xl font-bold font-heading">{test.name}</h4>
                                            <p className="text-accent text-sm uppercase tracking-widest font-semibold">{test.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
