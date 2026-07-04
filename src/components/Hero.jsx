function Hero() {
    return (
        <section className="bg-[#06231D] px-6 pt-28 pb-16 md:px-10 lg:px-16 lg:pt-40 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

                {/* Left side content */}
                <div>
                    {/* Badge */}
                    <span className="inline-block bg-lime-300 text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                        Revolutionize your workflow
                    </span>

                    {/* Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Intuitive solutions for complex challenges
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md">
                        Streamline your processes and enhance productivity with our all-in-one solution.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full mb-10 hover:bg-lime-300 transition w-full sm:w-auto">
                        Try for free
                    </button>

                    {/* Ratings */}
                    <div className="flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                        <div className="flex items-center gap-2 text-white">
                            <span>📱</span>
                            <span className="font-semibold">4.5</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-300 text-sm">on App store</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <span>▶️</span>
                            <span className="font-semibold">4.5</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-300 text-sm">on Play store</span>
                        </div>
                    </div>
                </div>

                {/* Right side - Image with floating card */}
                <div className="relative">
                    <img
                        src="/image1.avif"
                        alt="Person using laptop"
                        className="rounded-3xl w-full h-64 sm:h-80 md:h-96 lg:h-125 object-cover"
                    />
                    {/* Floating Net Revenue Card */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-lg w-44 sm:w-56">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-600 text-xs sm:text-sm">Net revenue</span>
                            <span className="text-gray-400">•••</span>
                        </div>
                        <p className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">$123,000</p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <span className="text-green-500">↗</span>
                            <span className="text-green-500 font-medium">5%</span>
                            <span className="text-gray-500">VS last month</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero