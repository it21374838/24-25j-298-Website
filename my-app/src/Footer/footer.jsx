
import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './footer.css';
// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">GoSwift</h3>
            <p className="footer-description">
               Innovative AI and ML Technologies for Optimizing Courier and 
               Logistics Services
            </p>
          </div>
          <div>
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#domain" className="footer-link">Our Domain</a></li>
              <li><a href="#milestones" className="footer-link">Milestones</a></li>
              <li><a href="#documents" className="footer-link">Documents</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <p>Email: info@goswift.org</p>
              <p>Phone: +94 11 284 2317</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 GoSwift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;