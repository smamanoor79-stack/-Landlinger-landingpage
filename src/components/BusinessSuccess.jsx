import { motion } from "framer-motion";

const team = [
    {
        name: "Jane Doe",
        role: "Designer",
        avatar: "/bs1.avif",
    },
    {
        name: "John Smith",
        role: "UI/UX Designer",
        avatar: "/bs2.avif",
    },
];

function BusinessSuccess() {
    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-24 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left side - Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        We drive business success with solutions.
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
                        Discover our powerful tools designed to streamline your workflow and boost productivity.
                    </p>

                    {/* Team members */}
                    <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.15 }}
                            >
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{member.name}</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA button */}
                    <motion.button
                        className="bg-[#06231D] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 hover:bg-lime-300 hover:text-gray-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        14_day free trial
                    </motion.button>
                </motion.div>

                {/* Right side - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                >
                    <img
                        src="/bs3.avif"
                        alt="Team collaborating on a project"
                        className="w-full h-80 sm:h-105 md:h-120 lg:h-140 object-cover rounded-3xl"
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default BusinessSuccess;