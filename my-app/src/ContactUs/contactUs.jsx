import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './contactUs.css';



// Contact Us Component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
       <h2 className="section-title" style={{ color: 'white' }}>Contact Us</h2>

          <div className="section-divider"></div>
        </div>
        <div className="contact-container">
          <div className="contact-grid">
            <div>
              <h3 className="contact-subtitle">Get in Touch</h3>
              <p className="contact-description">
                Have questions about Go Swift or want to learn more about our services?
                 We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" size={24} />
                  <span>+94 11 284 2317</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" size={24} />
                  <span>info@goswift.org</span>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="form-submit-button"
                >
                  <Mail className="button-icon" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;