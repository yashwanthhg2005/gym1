import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Plans = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedPlan, setSelectedPlan] = React.useState(null);
    const form = React.useRef();
    const [status, setStatus] = React.useState(null);

    const handlePlanSelect = (e, planName) => {
        e.preventDefault();
        setSelectedPlan(planName);
        setStatus(null);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // Simulating API call since real EmailJS credentials are not provided yet.
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setSelectedPlan(null);
                setStatus(null);
            }, 3000);
        }, 1500);
    };

    const plans = [
        {
            name: 'Basic',
            price: '1499',
            duration: '/month',
            description: 'Perfect for beginners starting their fitness journey.',
            features: ['Access to gym equipment', 'Locker facilities', '1 Fitness consultation', 'Standard support'],
            popular: false,
        },
        {
            name: 'Standard',
            price: '3999',
            duration: '/3 months',
            description: 'Ideal for consistent trainers looking for results.',
            features: ['All Basic features', 'Group fitness classes', 'Diet plan consultation', 'Monthly body assessment'],
            popular: true,
        },
        {
            name: 'Premium',
            price: '11999',
            duration: '/year',
            description: 'The ultimate package for serious fitness enthusiasts.',
            features: ['All Standard features', '2 Personal training sessions', 'Massage gun therapy', 'VIP Lounge access', 'Free gym merchandise'],
            popular: false,
        }
    ];

    return (
        <section id="plans" className="py-24 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-widest uppercase mb-2"
                    >
                        Membership Plans
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        Choose Your <span className="text-gradient">Pricing</span>
                    </motion.h2>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.popular
                                ? 'bg-gradient-to-b from-[#1a1a1a] to-primary border-2 border-accent shadow-[0_0_30px_rgba(57,255,20,0.2)] md:-translate-y-4'
                                : 'glass border border-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold px-4 py-1 rounded-full text-sm tracking-wider shadow-neon">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                            <div className="mb-8 flex items-end gap-1">
                                <span className="text-4xl font-black text-white">₹{plan.price}</span>
                                <span className="text-gray-400 mb-1">{plan.duration}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-accent/20 p-1 rounded-full text-accent">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                onClick={(e) => handlePlanSelect(e, plan.name)}
                                className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${plan.popular
                                    ? 'bg-accent text-primary hover:bg-[#2eaa10] shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-accent/50'
                                    }`}
                            >
                                Choose Plan
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Registration Modal */}
            {selectedPlan && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/90 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-2xl bg-[#111] glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                    >
                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            {status === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent">
                                        <Check size={32} className="text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-400">Thank you for registering our gym! Our team will contact you shortly about the <span className="text-accent font-bold">{selectedPlan}</span> plan.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-black font-heading text-white mb-2 uppercase">Join <span className="text-accent">Classic Energy</span></h3>
                                    <p className="text-gray-400 text-sm mb-6">Registering for: <span className="font-bold text-white">{selectedPlan} Plan</span></p>

                                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                        <input type="hidden" name="plan_name" value={selectedPlan} />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Full Name</label>
                                                <input type="text" name="user_name" placeholder="John Doe" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Email Address</label>
                                                <input type="email" name="user_email" placeholder="john@email.com" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Phone Number</label>
                                                <input type="tel" name="user_phone" placeholder="+91 0000000000" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Age</label>
                                                <input type="number" name="user_age" placeholder="25" min="12" max="100" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Gender</label>
                                                <select name="user_gender" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white appearance-none">
                                                    <option value="" disabled selected>Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Fitness Goal</label>
                                                <select name="user_goal" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white appearance-none">
                                                    <option value="" disabled selected>Why are you joining?</option>
                                                    <option value="Weight Loss">Weight Loss</option>
                                                    <option value="Weight Gain / Muscle">Weight Gain / Muscle Building</option>
                                                    <option value="General Fitness">General Fitness / Endurance</option>
                                                    <option value="Flexibility">Flexibility & Core</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Height (cm)</label>
                                                <input type="number" name="user_height" placeholder="e.g. 175" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Weight (kg)</label>
                                                <input type="number" name="user_weight" placeholder="e.g. 70" required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Any prior injuries or disabilities?</label>
                                            <textarea name="user_medical" rows="2" placeholder="If none, type 'None'. If yes, please specify..." required className="w-full bg-[#0a0a0a] border border-white/5 px-4 py-3 rounded-lg text-white resize-none"></textarea>
                                        </div>

                                        <button type="submit" disabled={status === 'loading'} className="w-full py-4 mt-6 bg-accent text-primary font-bold uppercase tracking-widest rounded-lg hover:bg-[#2eaa10] transition-colors shadow-neon disabled:opacity-50 text-sm">
                                            {status === 'loading' ? 'Sending...' : 'Complete Registration'}
                                        </button>
                                        {status === 'error' && <p className="text-red-500 text-center text-sm mt-2">Something went wrong. Try again.</p>}
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Plans;
