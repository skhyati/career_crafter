// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-20 flex justify-center items-center ">
      <div 
        className="bg-white rounded-xl shadow-lg p-10 max-w-4xl mx-auto text-center transform transition-transform duration-500 hover:scale-105"
        style={{ animation: 'fadeIn 1.5s ease-in-out' }}
      >
        <h2 className="text-4xl font-bold mb-5 text-[#6A38C2]">
          About CareerCrafters
        </h2>
        <p className="text-lg text-black mb-8">
          CareerCrafters is a premier job portal designed to connect job seekers with their dream careers and employers with top talent. Our mission is to streamline the job search process by offering a platform where opportunities meet the right skills. We pride ourselves on providing a user-friendly experience, whether you're searching for your next big opportunity or looking to hire the best candidates.
        </p>
        <p className="text-lg text-black">
          With advanced search features, customized job recommendations, and secure login for both job seekers and recruiters, CareerCrafters is your go-to platform for all things career-related. Join us and craft your career with the best in the industry.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
