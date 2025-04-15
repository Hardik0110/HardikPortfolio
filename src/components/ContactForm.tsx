import React, { useState, useRef } from 'react';
import { SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    purpose: '',
    subject: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error and success when user makes changes
    if (error) setError(null);
    if (success) setSuccess(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceId = 'service_zoq1w1s';
    const templateId = 'template_4vpop5s';
    const publicKey = 'dZiAkK9akG9nVWWdS';
    
    // EmailJS expects a form element or form data
    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSuccess(true);
        setFormData({
          email: '',
          purpose: '',
          subject: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
        {success ? (
          <div className="text-center py-8">
            <div className="mb-4 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-xl"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-yellow-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="purpose"
                className="block text-lg font-medium text-yellow-700 mb-2"
              >
                Purpose
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Select a purpose</option>
                <option value="job">Job Opportunity</option>
                <option value="project">Project Collaboration</option>
                <option value="question">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-yellow-700 mb-2"
              >
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                rows={4}
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Tell me what's on your mind..."
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:transform-none"
            >
              {loading ? (
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle" />
              ) : (
                <SendIcon size={20} />
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};