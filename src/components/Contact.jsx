import { motion } from "framer-motion";
import { useState } from "react";

const headingWords = "Get in touch with us".split(" ");

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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#F4F1E8] py-20 px-6 md:px-16">
      {/* Eyebrow + Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.span
          className="inline-block bg-[#C6EA6D] text-[#12271D] text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Let's talk
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-[#12271D] mb-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {headingWords.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.25em]">
              {w}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-gray-500 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Have a question or want to work together? Fill out the form below
          and our team will get back to you shortly.
        </motion.p>
      </div>

      {/* Two column layout */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Left: Info card (dark green) */}
        <motion.div
          className="bg-[#12271D] rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <div className="w-11 h-11 rounded-full bg-[#C6EA6D] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#12271D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              We'd love to hear from you
            </h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Reach out anytime — by phone, email, or by visiting our office.
              Our team typically replies within 24 hours.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            {[
              { icon: "📍", text: "1234 Innovation drive, suite 100, tech city CA 94043" },
              { icon: "📞", text: "(123) 456-7890" },
              { icon: "✉️", text: "example@gmail.com" },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
              >
                <span className="text-[#C6EA6D]">{item.icon}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Form card (cream / white) */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              className="h-full flex flex-col items-center justify-center text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-full bg-[#C6EA6D] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#12271D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#12271D] mb-2">
                Message sent!
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Thanks for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#12271D] text-sm font-medium underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Full name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email address", name: "email", type: "email", placeholder: "you@example.com" },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#12271D] mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6EA6D]"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-[#12271D] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C6EA6D]"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-[#C6EA6D] text-[#12271D] font-semibold py-3 rounded-full transition-colors duration-300 hover:bg-lime-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;