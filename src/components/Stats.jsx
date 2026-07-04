import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { value: 22, suffix: "+", label: "Years of experience" },
    { value: 105, suffix: "+", label: "In-house projects completed" },
    { value: 35, suffix: "+", label: "Awards and counting" },
    { value: 10, suffix: "K", prefix: ">", label: "Satisfied users" },
];

function Counter({ value, prefix = "", suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
            }
        });
        return unsubscribe;
    }, [springValue, prefix, suffix]);

    return (
        <span
            ref={ref}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tabular-nums inline-block text-left"
        >
            {prefix}0{suffix}
        </span>
    );
}

function Stats() {
    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                    >
                        <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        <motion.p
                            className="text-gray-500 text-sm sm:text-base mt-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.3 }}
                        >
                            {stat.label}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Stats;