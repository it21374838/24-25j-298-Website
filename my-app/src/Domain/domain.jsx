import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './domain.css';

const Domain = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  const domains = [
    {
      title: "Literature Survey",
      icon: "📚",
      content: "Recent advancements in Artificial Intelligence (AI) and Machine Learning (ML) have significantly impacted the logistics and courier service industry. Studies highlight the integration of AI and ML in optimizing delivery routes, enhancing workforce management, and improving customer feedback systems (Smith et al., 2022). Natural Language Processing (NLP) has been pivotal in developing automated voice activation systems, enabling real-time updates and improving customer interaction (Johnson & Lee, 2021). Research also emphasizes the use of predictive analytics for efficient fleet management, reducing delays, and increasing delivery accuracy (Brown & Clark, 2023). Additionally, voice sentiment analysis and image-based parcel verification have been explored to ensure accurate and reliable customer feedback (Williams, 2022). These technological integrations collectively aim to enhance operational efficiency and customer satisfaction in the courier industry.",
      image: "/images/literature-survey.jpg" // Replace with your actual image path
    },
    {
  title: "Research Gap",
  icon: "🔍",
  content: "The research gap in the courier service industry focuses on enhancing the accuracy and efficiency of delivery time predictions, optimizing workforce and fleet management through advanced AI and ML techniques, and improving customer feedback verification systems. Key gaps include the integration of real-time data analytics for dynamic route optimization, the development of scalable and automated voice activation systems for real-time updates, and the implementation of sentiment analysis for accurate customer feedback assessment. Additionally, there is a need for comprehensive systems that balance technological innovation with cost-effectiveness and foster interdisciplinary collaboration to address the multifaceted challenges in logistics and courier services.",
  image: "/images/research-gap.jpg" // Replace with your actual image path
},

    {
  title: "Research Problem",
  icon: "❓",
  content: "The main objective is to develop an integrated platform to enhance the efficiency and reliability of courier services. Sub-objectives include optimizing delivery time predictions using AI-driven models, implementing dynamic route planning for fleet management, developing automated systems for real-time delivery updates, and enhancing customer feedback verification through sentiment analysis and image processing. The goals focus on improving operational efficiency, reducing delivery delays, increasing staff productivity, and ensuring accurate customer feedback assessment. This research aims to pioneer data-driven solutions in the logistics industry, ultimately enhancing service quality and customer satisfaction.",
  image: "/images/research-problem.jpg" // Replace with your actual image path
},

    {
  title: "Research Objectives",
  icon: "🎯",
  content: "Core objectives involve enhancing the accuracy and efficiency of courier services through the integration of AI and ML technologies. This includes developing advanced models for precise delivery time predictions, optimizing workforce and fleet management through real-time data analytics, and implementing automated systems for real-time delivery updates. Additional objectives are to improve customer feedback verification using sentiment analysis and image processing, address gaps in dynamic route planning, and enhance overall operational efficiency. Ultimately, the research aims to empower courier services with innovative technological solutions, improving service quality and customer satisfaction.",
  image: "/images/research-objectives.jpg" // Replace with your actual image path
}

  ];
  
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="domain" className="domain-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"style={{ color: 'white' }}>Our Domain</h2>
          <div className="section-divider"></div>
          {/* <p className="section-subtitle">
            Exploring technological innovations for children with Down syndrome
          </p> */}
        </div>
        
        <div className="domain-cards-container">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className={`domain-card ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="domain-card-wrapper">
                <div className="domain-card-content-wrapper">
                  <div className="domain-card-header">
                    <div className="domain-card-icon">{domain.icon}</div>
                    <h3 className="domain-card-title">{domain.title}</h3>
                  </div>
                  
                  <div className="domain-card-divider"></div>
                  
                  <div className="domain-card-body">
                    <div className="domain-card-text">
                      <p className="domain-card-content">{domain.content}</p>
                    </div>
                    
                    <div className="domain-card-image">
                      <img src={domain.image} alt={domain.title} />
                    </div>
                  </div>
                  
                  <div className="domain-card-footer">
                    <button className="domain-card-btn">
                      {expandedCard === index ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Domain;