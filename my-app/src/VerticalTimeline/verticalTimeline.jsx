import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './verticalTimeline.css';

const VerticalTimeline = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRef = useRef(null);

  const milestones = [
    {
      id: 1,
      date: "14th of August 2024",
      title: "Proposal presentation ",
      description: "Presented to a panel of judges in order to provide an overview of the proposed research.",
      marks: "6%",
      icon: "📋",
      color: "yellow"
    },
    {
      id: 2,
      date: "6th of December 2024",
      title: "Progress Presentation - 1",
      description: "Evaluation of 50% completion of the proposed solution by a panel of judges.",
      marks: "15%",
      icon: "📊",
      color: "dark-blue"
    },
    {
      id: 3,
      date: "20th of March 2025",
      title: "Research Paper Submission",
      description: "Evaluation of research paper ",
      // marks: "10%",
      icon: "📄",
      color: "yellow"
    },
    {
      id: 4,
      date: "18th of March 2025",
      title: "Progress Presentation - 2",
      description: "Evaluation of 90% completion of the proposed solution by a panel of judges.",
      marks: "18%",
      icon: "⚙",
      color: "dark-blue"
    },
    {
      id: 5,
      date: "11th of April 2025",
      title: "Final Report Submission",
      description: "Final project submission and completion of all requirements.",
      // marks: "27%",
      icon: "📝",
      color: "yellow"
    },
    {
      id: 6,
      date: "26th of May 2025",
      title: "Website Assessment",
      description: "Final evaluation of the website implementation and functionality.",
      marks: "2%",
      icon: "💻",
      color: "yellow"
    },
    {
      id: 7,
      date: "26th of May 2025",
      title: "Final Assessment & Viva",
      description: "Final evaluation of the completed product and comprehensive assessment.",
      marks: "20%",
      icon: "🎯",
      color: "dark-blue"
    },
    
  ];
  // Calculate current progress based on dates
  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const startDate = new Date('2023-04-03');
      const endDate = new Date('2023-11-30');
      
      // If current date is before start date, progress is 0
      if (now < startDate) return 0;
      
      // If current date is after end date, progress is 100
      if (now > endDate) return 100;
      
      // Calculate percentage of timeline completed
      const totalDuration = endDate - startDate;
      const elapsedDuration = now - startDate;
      return Math.min(100, Math.round((elapsedDuration / totalDuration) * 100));
    };
    
    setProgress(calculateProgress());
    
    // Add scroll behavior for vertical timeline and animation
    const handleScroll = () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const isVisible = (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
          
          if (isVisible) {
            item.classList.add('visible');
            // Update progress line height
            const progressLine = timelineRef.current.querySelector('.timeline-progress');
            if (progressLine) {
              const progressHeight = (index + 1) / items.length * 100;
              progressLine.style.height = `${Math.min(progressHeight, progress)}%`;
            }
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [progress]);

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-header">
          <h2 className="section-title"style={{ color: 'white' }}>Project Timeline</h2>
          {/* <p className="timeline-subtitle">Key milestones and deliverables for our project</p> */}
        </div>
        
        <div className="timeline" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Timeline Progress Line */}
          <div className="timeline-progress"></div>
          
          {/* Milestone Items */}
          <div className="timeline-items">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id} 
                className="timeline-item"
                onMouseEnter={() => setActiveIndex(milestone.id)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="timeline-item-content">
                  {/* Date Bubble with Timeline Node Inside */}
                  <div className={`
                    date-bubble 
                    ${activeIndex === milestone.id ? 'date-bubble-active' : ''}
                    ${milestone.color === 'yellow' ? 'date-bubble-yellow' : 'date-bubble-blue'}
                  `}>
                    {/* Timeline Node */}
                    <div className="timeline-node">
                      <div className={`
                        timeline-node-icon
                        ${milestone.color === 'yellow' ? 'node-yellow' : 'node-blue'}
                      `}>
                        <span className="timeline-node-text">{milestone.icon}</span>
                      </div>
                    </div>
                    
                    {/* Date */}
                    <div className="date-bubble-inner">
                      {milestone.date}
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`
                    content-box
                    ${milestone.color === 'yellow' ? 'content-box-yellow' : 'content-box-blue'}
                  `}>
                    <h3 className={`content-title ${milestone.color === 'yellow' ? 'title-yellow' : 'title-blue'}`}>
                      {milestone.title}
                    </h3>
                    <p className="content-description">{milestone.description}</p>
                    <div className="content-footer">
                      <span className={`
                        marks-tag
                        ${milestone.color === 'yellow' ? 'marks-yellow' : 'marks-blue'}
                      `}>
                        Marks: {milestone.marks}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerticalTimeline;