import { motion } from "framer-motion";

function Steps() {
    const steps = [
        {
            number: "01",
            title: "Sign up",
            description: "Create your account in seconds and choose your plan.",
        },
        {
            number: "02",
            title: "Integrate and collect data",
            description: "Tailor your settings and preferences to fit your business needs.",
        },
        {
            number: "03",
            title: "Invite team",
            description: "Add team members and collaborators to get started.",
        },
    ];

    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">

            {/* Header */}
            <motion.div
                className="text-center mb-12 lg:mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span className="inline-block bg-lime-300 text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                    Easy steps to success
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    Quick start guide
                </h2>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 lg:mb-16">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                    >
                        <div className="w-11 h-11 md:w-12 md:h-12 bg-lime-300 rounded-full flex items-center justify-center font-semibold text-gray-900 mb-4 text-base md:text-lg">
                            {step.number}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Image */}
            <motion.div
                className="rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <img
                    src="/image3.avif"
                    alt="Team collaborating"
                    className="w-full h-56 sm:h-72 md:h-96 lg:h-125 object-cover"
                />
            </motion.div>

        </section>
    )
}

export default Steps