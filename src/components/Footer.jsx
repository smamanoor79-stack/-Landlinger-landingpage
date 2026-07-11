import { motion } from "framer-motion";

const pagesLinks = ["Home", "Home 2", "Home 3", "Product", "Product 2", "Product 3"];
const companyLinks = ["About", "Request a Demo", "Blog", "Contact", "FAQs", "Privacy"];

function Footer() {
    return (
        <footer  className="bg-[#06231D] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Brand column */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-lime-300 text-3xl">✦</span>
                        <span className="text-white text-2xl font-bold">Landinger</span>
                    </div>
                    <p className="text-gray-400 mb-8">
                        Trusted solutions for your growing business
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-white text-4xl font-bold">4.8</span>
                        <div>
                            <div className="flex gap-1 text-yellow-500 text-lg">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm">Best rated company</p>
                        </div>
                    </div>
                </div>

                {/* Pages column */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Pages</h3>
                        <ul className="space-y-3">
                            {pagesLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className={`hover:text-lime-300 transition-colors ${
                                            link === "Home" ? "text-lime-300" : "text-gray-300"
                                        }`}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 invisible lg:visible">.</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 hover:text-lime-300 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact column */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Contact us</h3>
                    <p className="text-gray-300 mb-4">
                        1234 Innovation drive, suite 100, tech city, CA 94043
                    </p>
                    <p className="text-gray-300 mb-4">(123) 456-7890</p>
                    <a href="mailto:example@gmail.com" className="text-white underline mb-6 inline-block">
                        example@gmail.com
                    </a>

                    <div className="flex items-center gap-3 mt-2">
                        <span>👋</span>
                        <span className="text-white font-semibold">Follow Us:</span>
                        <div className="flex items-center gap-3 text-white">
                            <a href="#" aria-label="Meta" className="hover:text-lime-300 transition-colors">⌾</a>
                            <a href="#" aria-label="Dribbble" className="hover:text-lime-300 transition-colors">◐</a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-lime-300 transition-colors">in</a>
                            <a href="#" aria-label="X" className="hover:text-lime-300 transition-colors">𝕏</a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <p>
                    © 2026 <a href="#" className="underline text-gray-300">Landinger.</a>
                </p>
                <p>
                    Developed by <a href="#" className="underline text-gray-300">Smama with ❤️</a>
                    {" "}| Design by <a href="#" className="underline text-gray-300">Themeforest</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;