import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg flex overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-4xl font-bold text-[#3730A3]">Contact Us</h2>
          <p className="mt-4 text-[#3730A3]">
  Have questions or need assistance? Fill out the form below, and our team will reach out to you shortly with the support you need.
</p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 placeholder-[#0C71C3] text-[#0C71C3] rounded-md focus:outline-none focus:ring-[#0C71C3] focus:border-[#0C71C3] sm:text-sm"
                  placeholder="Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-[#0C71C3] placeholder-[#0C71C3] text-[#0C71C3] rounded-md focus:outline-none focus:ring-[#0C71C3] focus:border-[#0C71C3] sm:text-sm"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-[#0C71C3] placeholder-[#0C71C3] text-[#0C71C3] rounded-md focus:outline-none focus:ring-[#0C71C3] focus:border-[#0C71C3] sm:text-sm"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4  font-semibold rounded-md text-white bg-[#3730A3] hover:bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0C71C3]"
              >
                Send Message
              </button>
            </div>
          </form>
          {submitted && (
            <div className="mt-4 p-4 bg-[#3730A3] text-[#3730A3] rounded">
              Your response has been submitted!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;