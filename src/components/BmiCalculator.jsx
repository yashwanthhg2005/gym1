import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const BmiCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBmi = (e) => {
        e.preventDefault();
        if (!height || !weight) return;

        const h = parseFloat(height) / 100; // cm to m
        const w = parseFloat(weight);
        const result = (w / (h * h)).toFixed(1);

        setBmi(result);

        if (result < 18.5) {
            setCategory('Underweight');
        } else if (result >= 18.5 && result <= 24.9) {
            setCategory('Healthy');
        } else if (result >= 25 && result <= 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obese');
        }
    };

    const getColor = () => {
        switch (category) {
            case 'Healthy': return 'text-[#39FF14]';
            case 'Underweight': return 'text-yellow-400';
            case 'Overweight': return 'text-orange-500';
            case 'Obese': return 'text-red-500';
            default: return 'text-white';
        }
    };

    return (
        <section className="py-24 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-primary-light to-primary rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden relative">

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-accent font-bold tracking-widest uppercase mb-2">Health Status</h4>
                            <h2 className="text-4xl font-black uppercase mb-6">Calculate Your <span className="text-gradient">BMI</span></h2>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                Enter your height and weight to find out your Body Mass Index and understand your fitness level.
                            </p>

                            <form onSubmit={calculateBmi} className="space-y-4 max-w-sm">
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        placeholder="Height (cm)"
                                        className="w-full bg-[#111] focus:bg-[#1a1a1a]"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="Weight (kg)"
                                        className="w-full bg-[#111] focus:bg-[#1a1a1a]"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-[#2eaa10] transition-colors shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                                    Calculate Now
                                </button>
                            </form>
                        </motion.div>

                        {/* Results Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center"
                        >
                            {bmi ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-[#111] border border-white/10 p-12 rounded-3xl text-center glass relative shadow-neon"
                                >
                                    <Target size={32} className={`mx-auto mb-4 ${getColor()}`} />
                                    <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-2">Your BMI Is</p>
                                    <h3 className="text-6xl font-black mb-2 font-heading">{bmi}</h3>
                                    <p className={`text-xl font-bold uppercase tracking-widest ${getColor()}`}>{category}</p>
                                </motion.div>
                            ) : (
                                <div className="bg-[#111] border border-white/5 p-12 rounded-3xl text-center w-64 h-64 flex flex-col items-center justify-center">
                                    <span className="text-gray-500 font-bold uppercase tracking-widest">Result Here</span>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                </div>
            </div>
        </section>
    );
};

export default BmiCalculator;
