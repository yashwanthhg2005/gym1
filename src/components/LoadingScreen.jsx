import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-primary z-[100] fixed top-0 left-0">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-accent mb-4"
            >
                <Dumbbell size={64} />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl font-heading font-bold text-white tracking-widest uppercase"
            >
                Classic Energy Fitness
            </motion.h1>
            <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-accent shadow-neon"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
