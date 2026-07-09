import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        // Simulating API call since real EmailJS credentials are not provided yet.
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus(null), 4000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-primary/50 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-16">

                    {/* Left Side: Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-accent font-bold tracking-widest uppercase mb-2">Get In Touch</h4>
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
                            Ready to <span className="text-gradient">Start?</span>
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
                            Visit our premium facility at AIT Circle, Chikamagaluru. Contact our team to book your free trial session today.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-xl text-accent border border-white/5 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading mb-1">Our Location</h4>
                                    <p className="text-gray-400">AIT Circle, Chikamagaluru,<br />Karnataka, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-xl text-accent border border-white/5 mt-1">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading mb-1">Call Us</h4>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 p-3 rounded-xl text-accent border border-white/5 mt-1">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading mb-1">Opening Hours</h4>
                                    <p className="text-gray-400">Mon-Sat: 5:00 AM - 10:00 PM<br />Sun: 6:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-64 rounded-2xl overflow-hidden glass shadow-xl border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.20455589133!2d75.78363761482594!3d13.337583390616901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad79cf2fae025%3A0xe96c4d7e2e3f5383!2sAIT%20Circle%2C%20Kalyan%20Nagar%2C%20Chikkamagaluru%2C%20Karnataka%20577102!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <div className="w-full glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10" />

                            <h3 className="text-3xl font-black mb-8 uppercase font-heading">Send a Message</h3>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Name</label>
                                    <input type="text" name="user_name" className="w-full bg-[#0a0a0a]" placeholder="John Doe" required />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Email</label>
                                        <input type="email" name="user_email" className="w-full bg-[#0a0a0a]" placeholder="john@email.com" required />
                                    </div>
                                    <div>
                                        <label className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Phone</label>
                                        <input type="tel" name="user_phone" className="w-full bg-[#0a0a0a]" placeholder="+91 0000000000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Message</label>
                                    <textarea name="message" rows="4" className="w-full bg-[#0a0a0a] resize-none" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-white text-primary font-black uppercase tracking-widest rounded-lg hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-neon disabled:opacity-50">
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && <p className="text-accent text-center font-semibold text-sm mt-4">Message sent successfully!</p>}
                                {status === 'error' && <p className="text-red-500 text-center font-semibold text-sm mt-4">Failed to send. Please try again.</p>}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.006 2C6.482 2 2 6.482 2 12.006c0 1.768.455 3.486 1.32 5.013L2 22l5.122-1.304A9.957 9.957 0 0012.006 22c5.524 0 10.006-4.482 10.006-10.006S17.53 2 12.006 2zM17.3 15.684c-.22.617-1.282 1.18-1.782 1.25-.48.067-1.096.113-3.417-.834-2.8-1.144-4.595-4.01-4.735-4.195-.14-.185-1.127-1.484-1.127-2.83 0-1.346.714-2.007.962-2.27.247-.26.536-.324.715-.324.18 0 .36.002.518.008.167.008.388-.065.61.468.223.535.736 1.795.8 1.93.065.132.107.288.018.468-.09.18-.135.293-.267.447-.133.155-.282.34-.403.468-.132.144-.27.302-.116.568.156.265.69 1.127 1.472 1.823.997.89 1.83 1.166 2.094 1.298.265.132.418.11.574-.066.156-.176.666-.78.844-1.047.178-.266.356-.22.595-.133.24.088 1.504.707 1.762.836.26.13.434.19.497.302.062.112.062.65-.158 1.267z" /></svg>
                <span className="absolute right-full mr-4 bg-white text-[#25D366] font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
            </a>
        </section>
    );
};

export default Contact;
