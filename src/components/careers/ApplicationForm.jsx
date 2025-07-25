'use client';

import { useState } from 'react';

export default function ApplicationForm() {

  const 	OPEN_DOOR_CV_UPLOAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx_FmIAUfQS66oUo17hEegLzFkpJiAO9C37oMJ_kq6bWIrYrG90VZwwEGL_jTLv_U8/exec'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    cv: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        cv: e.target.files[0]
      }));
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('');

  try {
    if (!formData.cv) {
      setSubmitStatus('⚠️ Please upload your CV before submitting.');
      setIsSubmitting(false);
      return;
    }

    // Convert file to base64
    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1]; // remove prefix
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });

    const cvBase64 = await toBase64(formData.cv);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('contact', formData.contact);
    formDataToSend.append('cvBase64', cvBase64);
    formDataToSend.append('cvName', formData.cv.name);

    const response = await fetch(OPEN_DOOR_CV_UPLOAD_ENDPOINT, {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.result === 'success') {
      setSubmitStatus('✅ Application submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', contact: '', cv: null });
      document.getElementById('cv').value = ''; // reset file input
    } else if (result.result === 'duplicate') {
      setSubmitStatus('⚠️ You have already submitted this form. Duplicate submission is not allowed.');
    } else {
      console.error(result);
      setSubmitStatus('❌ Error submitting application. Please try again.');
    }
  } catch (error) {
    console.error(error);
    setSubmitStatus('❌ Error submitting application. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Apply Now</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to join our team? Fill out the application form below and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                placeholder="Enter your contact number"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">Upload CV (PDF) *</label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2 inline-block"></i>Submitting...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2 inline-block"></i>Submit Application
                  </>
                )}
              </button>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`mt-4 p-4 rounded-lg ${submitStatus.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
