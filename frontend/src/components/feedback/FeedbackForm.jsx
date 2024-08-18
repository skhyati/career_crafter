// src/components/FeedbackForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackDescription, setFeedbackDescription] = useState('');
  const [jobSeekerId, setJobSeekerId] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch jobSeekerId from session storage when component mounts
  useEffect(() => {
    const jobSeeker = sessionStorage.getItem('jobSeeker');
    
    if (jobSeeker) {
      const jobSeekerObj = JSON.parse(jobSeeker);
      setJobSeekerId(jobSeekerObj.jobSeekerId);
    } else {
      navigate('/login'); // Redirect to login if jobSeeker is not found
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = {
        feedbackTitle,
        feedbackDescription,
        jobSeekerId, // JobSeeker ID retrieved from session storage
      };

      const response = await axios.post('http://localhost:7070/api/feedbacks', feedbackData);

      if (response.status === 200) {
        setMessage('Feedback submitted successfully!');
        setFeedbackTitle('');
        setFeedbackDescription('');
      } else {
        setMessage('Failed to submit feedback.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('An error occurred while submitting feedback.');
    }
  };

  // Render the feedback form only if jobSeekerId is set
  return (
    jobSeekerId ? (
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#6A38C2] mb-6">Submit Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="feedbackTitle" className="block text-lg font-semibold text-black mb-2">
              Feedback Title
            </label>
            <input
              type="text"
              id="feedbackTitle"
              value={feedbackTitle}
              onChange={(e) => setFeedbackTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#6A38C2]"
              required
            />
          </div>
          <div>
            <label htmlFor="feedbackDescription" className="block text-lg font-semibold text-black mb-2">
              Feedback Description
            </label>
            <textarea
              id="feedbackDescription"
              rows="4"
              value={feedbackDescription}
              onChange={(e) => setFeedbackDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#6A38C2]"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#6A38C2] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#5830a2] transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>
        {message && (
          <p className={`text-center mt-4 ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    ) : null // If jobSeekerId is not set, render nothing (or you could redirect)
  );
};

export default FeedbackForm;
