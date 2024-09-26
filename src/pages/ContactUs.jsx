import React, { useState } from 'react';
import { About } from "../assets/export.js";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const body = { email, subject, message };

    try {
      const response = await fetch('https://api.fitnessbyfaith.org/support/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSuccess('Your message has been sent successfully.');
        // Reset form fields
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-5 lg:mt-28 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        {/* Left Side - Contact Form */}
        <div className="w-full max-w-lg lg:w-1/2 bg-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-medium mb-6 text-[#64B5AC] text-center">Get in Touch</h2>
          {error && <p className="bg-red-500 text-white mb-4">{error}</p>}
          {success && <p className="text-white bg-[#64B5AC] mb-4 p-5 rounded-lg">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#64B5AC]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#64B5AC]"
                placeholder="Enter Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#64B5AC] resize-none"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#64B5AC] text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-700 focus:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 max-w-lg">
          <img src={About} alt="Contact Us" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
