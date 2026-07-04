import { motion } from "framer-motion";

function Pricing() {
    return (
        <section className="bg-[#F3F1E7] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <span className="inline-block bg-lime-300 text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                        Unlock premium features
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        Fit your business goals
                    </h2>

                    {/* Image with floating phone mockup */}
                    <div className="relative mb-6">
                        <img
                            src="/image4.avif"
                            alt="Person working on laptop"
                            className="w-full h-105 sm:h-130 md:h-155 object-cover rounded-3xl"
                        />

                        {/* Floating phone mockup */}
                        <div className="absolute -bottom-6 right-4 sm:right-8 md:right-10 w-36 sm:w-44 md:w-52 aspect-9/19 bg-white rounded-[2.5rem] border-[6px] border-gray-900 shadow-xl flex flex-col items-center justify-center px-4 overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 w-20 h-5 bg-gray-900 rounded-b-xl"></div>

                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lime-300 rounded-full flex items-center justify-center mb-4">
                                <span className="text-gray-900 text-2xl font-bold">✓</span>
                            </div>
                            <p className="text-gray-900 font-bold text-base sm:text-lg text-center leading-tight">
                                Payment Successful
                            </p>

                            {/* Home indicator */}
                            <div className="absolute bottom-2 w-10 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                        <span>🏷️</span>
                        <p>
                            Get 20% off when you choose annual billing.{" "}
                            <a href="#" className="font-semibold text-gray-900 underline underline-offset-2 inline-flex items-center gap-1">
                                Visit Pricing
                                <span aria-hidden="true">→</span>
                            </a>
                        </p>
                    </div>
                </motion.div>

                {/* Right side - Pricing cards */}
                <div className="flex flex-col gap-6">

                    {/* Basic plan - dark card */}
                    <motion.div
                        className="bg-[#06231D] rounded-3xl p-8 md:p-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-lime-300 rounded-full flex items-center justify-center text-xl">
                                ⚡
                            </div>
                            <span className="text-white text-lg md:text-xl font-semibold">Basic plan</span>
                        </div>

                        <p className="text-white mb-8">
                            <span className="text-4xl md:text-5xl font-bold">$19</span>
                            <span className="text-gray-300 text-base md:text-lg">/month</span>
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-white text-sm md:text-base">
                                <span className="text-lime-300">✓</span> Automated reporting
                            </li>
                            <li className="flex items-center gap-3 text-white text-sm md:text-base">
                                <span className="text-lime-300">✓</span> Basic analytics
                            </li>
                            <li className="flex items-center gap-3 text-white text-sm md:text-base">
                                <span className="text-lime-300">✓</span> Real-time collaboration for up to 5 users
                            </li>
                            <li className="flex items-center gap-3 text-white text-sm md:text-base">
                                <span className="text-lime-300">✓</span> Customizable dashboards
                            </li>
                        </ul>

                        <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 rounded-full transition">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Custom plan - light card */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 md:p-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#06231D] rounded-full flex items-center justify-center text-xl">
                                🔥
                            </div>
                            <span className="text-gray-900 text-lg md:text-xl font-semibold">Custom plan</span>
                        </div>

                        <p className="text-gray-700 text-sm md:text-base mb-8">
                            Designed for large organizations requiring custom solutions.
                        </p>

                        <button className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold py-3 rounded-full transition">
                            Get Started
                        </button>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}

export default Pricing