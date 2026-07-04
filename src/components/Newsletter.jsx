import { motion } from "framer-motion";
import { useState } from "react";

const headingWords = "Be the first to know about new features, improvements, and special promotions.".split(" ");

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const word = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submission
    };

    return (
        <section className="bg-[#F3F1E7] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
            <motion.div
                className="relative rounded-3xl overflow-hidden min-h-105 sm:min-h-120 flex items-center px-6 sm:px-10 lg:px-16"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src="/ns1.avif"
                    alt="Person working in a cafe"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pt-4 sm:pt-6">
                    {/* Animated heading, word by word */}
                    <motion.h2
                        className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-xl"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {headingWords.map((w, i) => (
                            <motion.span
                                key={i}
                                variants={word}
                                className="inline-block mr-[0.3em]"
                            >
                                {w}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* Email form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="info@example.com"
                            className="bg-white text-gray-900 placeholder-gray-400 px-6 py-3 sm:py-4 rounded-full w-full sm:w-72 lg:w-80 outline-none"
                        />
                        <motion.button
                            type="submit"
                            className="bg-[#06231D] text-white font-semibold px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 hover:bg-lime-300 hover:text-gray-900"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}

export default Newsletter;