import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white px-6 py-5 md:px-10 lg:px-16 lg:py-8 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-base md:text-lg">L</span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-gray-900">Landinger</span>
        </div>
        {/* Menu Links - desktop */}
        <div className="hidden lg:flex items-center gap-10 text-base text-gray-800 font-medium tracking-wide">
          <a href="#home" className="text-gray-900 hover:text-gray-600">
            Home
          </a>
          <a href="#features" className="hover:text-gray-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-600">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-gray-600">
            Testimonials
          </a>
          <a href= "#contact" className="hover:text-gray-600">
            Contact us
          </a>
        </div>
        {/* Right side: Cart + Buy Now - desktop */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="flex items-center gap-2 text-base text-gray-900 font-medium">
            Cart
            <span className="bg-lime-300 text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <button className="bg-lime-300 hover:bg-lime-400 text-gray-900 text-base font-semibold px-6 py-2.5 rounded-full transition">
            Buy Now
          </button>
        </div>
        {/* Hamburger button - mobile/tablet */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-6 mt-6 pb-4 text-base text-gray-800 font-medium">
          <a href="#home" className="text-gray-900" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#features" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact us
          </a>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-900 font-medium">
              Cart
              <span className="bg-lime-300 text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button className="bg-lime-300 hover:bg-lime-400 text-gray-900 text-sm font-semibold px-5 py-2 rounded-full transition">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
