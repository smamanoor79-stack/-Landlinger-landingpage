import { motion } from "framer-motion";

const testimonials = [
    {
        type: "image",
        brand: "Iconic",
        icon: "◐",
        image: "/ts1.avif",
        quote: "Efficiency redefined, productivity amplified.",
    },
    {
        type: "highlight",
        brand: "Optimal",
        icon: "▲",
        rating: 5,
        quote: "Landinger has revolutionized the way we operate. The automated reporting feature alone has saved us countless hours each month.",
        name: "John Doe",
        role: "SEO expert at Coderthemes",
    },
    {
        type: "image",
        brand: "Artistry",
        icon: "◐",
        image: "/ts2.avif",
        quote: "Person she control of to beginnings view looked eyes Than continues.",
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="bg-[#F3F1E7] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
            {/* Header */}
            <motion.div
                className="text-center mb-12 lg:mb-16"
                initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <span className="inline-block bg-lime-300 text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                    Testimonials
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                    Hear from our happy customers
                </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.brand}
                        className={`relative rounded-3xl overflow-hidden min-h-120 sm:min-h-140 flex flex-col justify-between p-6 sm:p-8 ${
                            item.type === "highlight" ? "bg-lime-300" : "bg-gray-200"
                        }`}
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.25 }}
                    >
                        {item.type === "image" && (
                            <img
                                src={item.image}
                                alt={item.brand}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )}

                        {item.type === "image" && (
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0" />
                        )}

                        {/* Brand badge */}
                        <div
                            className={`relative z-10 flex items-center gap-2 font-semibold ${
                                item.type === "image" ? "text-white" : "text-gray-900"
                            }`}
                        >
                            <span
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                    item.type === "image" ? "bg-white/90 text-gray-900" : "bg-gray-900 text-white"
                                }`}
                            >
                                {item.icon}
                            </span>
                            <span className="text-lg">{item.brand}</span>
                        </div>

                        {/* Highlight card content */}
                        {item.type === "highlight" && (
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex gap-1 text-yellow-500 text-xl">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-gray-900 text-lg sm:text-xl leading-relaxed">
                                    {item.quote}
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900">{item.name}</p>
                                    <p className="text-gray-700 text-sm">{item.role}</p>
                                </div>
                            </div>
                        )}

                        {/* Image card quote */}
                        {item.type === "image" && (
                            <p className="relative z-10 text-white text-xl sm:text-2xl font-semibold leading-snug">
                                "{item.quote}"
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;