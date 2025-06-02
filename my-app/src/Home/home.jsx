
import React, { useState, useEffect, useRef } from 'react';

import { ChevronDown, Menu, ChevronUp, X, Heart, Users, FileText, Calendar, Star, BookOpen, ArrowRight, Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './home.css';
// Home Component
// Animated Number Counter Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}+</span>;
};
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>

      {/* Hero section */}
      <div className="container">
        <div className={`hero-grid ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <div className="badge">
              <Star className="badge-icon" size={14} />
              Revolutionizing Courier Services
            </div>

            <h1 className="hero-title">
              What is <span className="gradient-text">GoSwift</span>?
            </h1>

            <p className="hero-description">
              Go Swift is an innovative courier service leveraging AI, ML, and NLP to optimize delivery operations.
              We enhance efficiency, ensure reliable deliveries,
              and improve customer satisfaction through advanced technology
              and real-time solutions.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => document.getElementById('domain')?.scrollIntoView({ behavior: 'smooth' })}
                className="primary-button"
              >
                Learn More <ChevronDown className="button-icon" size={20} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="secondary-button"
              >
                Get Started <ArrowRight className="button-icon" size={20} />
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src="https://it21374838.github.io/24-25j-298-Website/images/backgrounds.png"
                alt="logo"
                className="hero-image"
              />
              <div className="image-decoration"></div>
            </div>
            <div className="floating-card card-1">
              <Heart className="card-icon" size={20} />
              <p>Efficient Deliveries</p>
            </div>
            <div className="floating-card card-2">
              <BookOpen className="card-icon" size={20} />
              <p>Optimized Routes</p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="stats-container animate-on-scroll">
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={10000} /></div>
            <div className="stat-label">Deliveries Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={500} /></div>
            <div className="stat-label">Professional Drivers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={200} /></div>
            <div className="stat-label">Optimized Routes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={100} /></div>
            <div className="stat-label">Partner Businesses</div>
          </div>
        </div>


        {/* Features preview */}
        <div className="features-preview animate-on-scroll">
          <h2 className="section-title"style={{ color: 'white' }}>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper blue">
                <Star size={24} />
              </div>
              <h3>Fast Deliveries</h3>
      <p>Ensure quick and reliable delivery of your parcels to any destination.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper green">
                <Users size={24} />
              </div>
              <h3>Route Optimization</h3>
      <p>Utilize advanced algorithms to find the most efficient delivery routes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper purple">
                <BookOpen size={24} />
              </div>
             <h3>Real-Time Tracking</h3>
      <p>Monitor your deliveries in real-time for complete transparency and peace of mind.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;