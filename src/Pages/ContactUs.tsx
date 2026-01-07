import { useMutation } from '@tanstack/react-query';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { createContactUs, type IContactUsData } from '../Services/apiContactUs';

const ContactUs = () => {
  const [formData, setFormData] = useState<IContactUsData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createContactUs,
    onSuccess: () => {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    },
    onError: (error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Card Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Contact Information */}
        <div className="lg:w-5/12 bg-gradient-to-br from-purple-600 to-pink-500 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-purple-100 mb-8 leading-relaxed">
              Have a question or just want to say hi? We'd love to hear from you. 
              Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-purple-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-purple-100">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-purple-100">123 Friendly Lane,<br />Design City, DC 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            {/* Decorative circles/elements could go here */}
            <p className="text-sm text-purple-200">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-7/12 p-10 lg:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Status */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending || isSent}
                className={`w-full flex items-center justify-center py-4 px-6 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 
                  ${isSent 
                    ? 'bg-green-500 cursor-default hover:translate-y-0' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl'
                  } 
                  ${isPending ? 'opacity-75 cursor-wait' : ''}
                `}
              >
                {isPending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSent ? (
                  <span className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;