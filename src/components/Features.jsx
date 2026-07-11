import { motion } from "framer-motion";

function Features() {
    return (
        <section id="features" className="bg-[#F3F1E7] px-6 py-16 md:px-10 lg:px-16 lg:py-24">

            {/* Header */}
            <motion.div
                className="text-center mb-10 md:mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Key features that save time
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                    Discover our powerful tools designed to streamline your workflow and boost productivity.
                </p>
            </motion.div>

            {/* Two Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8 lg:mb-12">

                {/* Light Card - takes more space */}
                <motion.div
                    className="lg:col-span-3 bg-white rounded-3xl p-6 relative overflow-visible"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="w-12 h-12 bg-lime-200 rounded-full flex items-center justify-center mb-4 text-xl">
                        📊
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 max-w-xs leading-tight">
                        Generate detailed reports with just a few clicks.
                    </h3>

                    {/* Image + floating product card container */}
                    <div className="relative w-[70%] sm:w-[52%] ml-auto h-40 mt-16 sm:mt-10 mb-3">
                        <img
                            src="/image2.avif"
                            alt="Product preview"
                            className="w-full h-full object-cover rounded-xl"
                        />

                        {/* Floating Product Card with graph */}
                        <div className="absolute -top-9 left-0 bg-[#F3F1E7] rounded-xl px-4 py-3 shadow-lg w-40 sm:w-44 z-10">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm">📦</span>
                                    <span className="text-xs font-medium text-gray-900">Product</span>
                                </div>
                                <svg width="44" height="16" viewBox="0 0 60 20" fill="none">
                                    <path
                                        d="M2 15 L15 10 L22 16 L32 4 L40 9 L50 6 L58 2"
                                        stroke="#111827"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-gray-900">$8980</span>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm md:text-lg max-w-xs">
                        Discover our powerful tools designed to streamline your workflow and boost productivity.
                    </p>
                </motion.div>

                {/* Dark Card */}
                <motion.div
                    className="lg:col-span-2 bg-[#06231D] rounded-3xl p-8 lg:p-10 flex flex-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-lime-300 rounded-full flex items-center justify-center mb-6 text-xl lg:text-2xl">
                        ⚡
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 lg:mb-10 leading-snug">
                        Work seamlessly with your team, no matter where they are
                    </h3>
                    <ul className="space-y-3 lg:mt-auto">
                        <li className="flex items-center gap-2 text-white text-base md:text-lg">
                            <span className="text-lime-300">✓</span> Live editing
                        </li>
                        <li className="flex items-center gap-2 text-white text-base md:text-lg">
                            <span className="text-lime-300">✓</span> Instant feedback
                        </li>
                        <li className="flex items-center gap-2 text-white text-base md:text-lg">
                            <span className="text-lime-300">✓</span> Task assignments
                        </li>
                    </ul>
                </motion.div>

            </div>

            {/* Stats Bar */}
            <motion.div
                className="bg-lime-300 rounded-3xl p-6 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-gray-900 font-bold text-xl md:text-2xl max-w-xs leading-snug">
                    Generate detailed reports with just a few clicks.
                </p>

                <div className="flex items-center gap-3">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900">99%</p>
                    <p className="text-gray-800 text-sm leading-tight max-w-30 text-left">
                        Track and analyze business reports
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-3 justify-center sm:justify-start">
                        <p className="text-4xl md:text-5xl font-bold text-gray-900">4.8</p>
                        <div className="flex gap-1 text-lg md:text-xl text-gray-900">
                            ★★★★☆
                        </div>
                    </div>
                    <p className="text-gray-800 text-sm mt-1">
                        Best rated company
                    </p>
                </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-10 lg:mt-12 text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <span className="text-xl">💬</span>
                <p className="text-gray-700 text-sm md:text-base">
                    Contact our team for more information.{" "}
                    <a href="#" className="font-semibold text-gray-900 underline underline-offset-2 inline-flex items-center gap-1">
                        Let's chat
                        <span aria-hidden="true">→</span>
                    </a>
                </p>
            </motion.div>

        </section>
    )
}

export default Features