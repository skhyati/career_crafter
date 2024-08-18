// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-[#f3f4f6] py-20 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-4xl font-bold mb-5 text-[#6A38C2] text-center">
          Contact Us
        </h2>
        <p className="text-lg text-black mb-8 text-center">
          We're here to help! Whether you have a question about our services, need assistance with your account, or want to share feedback, feel free to reach out to us.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#6A38C2]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#6A38C2]"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#6A38C2]"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#6A38C2] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#5830a2] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
