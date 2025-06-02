import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './aboutUs.css';


const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mr. Uditha Dharmakeerthi",
      role: "Supervisor",
      image: "images/supervisor.jpg",
    },
    {
      name: "Mr. Amila Senarathne",
      role: "Co-supervisor",
      image: "images/cosup.jpg",
     
    },
   
    {
      name: "Ellewela A.V.H",
      role: "IT21361272",
      image: "https://it21374838.github.io/24-25j-298-Website/images/adi.jpg",
      bio: "Team leader"
    },
    {
      name: "Rathnayaka K.P.Y.N",
      role: "IT21031748",
      image: "images/yasasi.jpg",
      bio: "Team Member"
    },
    {
      name: "Dissanayake D.T.D",
      role: "IT21165948",
      image: "images/diwya.jpg",
      bio: "Team Member"
    },
    {
      name: "Silva K.H.L.D",
      role: "IT21374838",
      image: "images/linal.jpg",
      bio:"Team Member"
    }
  ];

  // Separate supervisors and team members
  const supervisors = teamMembers.slice(0, 2);
  const students = teamMembers.slice(2);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"style={{ color: 'white' }}>Meet the Team</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* Supervisors Section */}
        <h3 className="team-category">Supervisors</h3>
        <div className="team-grid supervisors-grid">
          {supervisors.map((member, index) => (
            <div key={index} className="team-member supervisor-card">
              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="image-overlay"></div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              <div className="member-links">
                <button className="member-link-button">
                  <ExternalLink size={20} />
                </button>
                <button className="member-link-button">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Students Section */}
        <h3 className="team-category">Team Members</h3>
        <div className="team-grid students-grid">
          {students.map((member, index) => (
            <div key={index} className="team-member student-card">
              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="image-overlay"></div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              <div className="member-links">
                <button className="member-link-button">
                  <ExternalLink size={20} />
                </button>
                <button className="member-link-button">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mission-section">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              At Go Swift, we aim to revolutionize courier services using AI, ML, and NLP. 
              We enhance efficiency, optimize workforce management, and ensure reliable deliveries.
               Our innovative solutions address industry challenges, setting new benchmarks for
                logistics excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;