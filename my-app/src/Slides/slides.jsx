import React from 'react';
import { FileText, Download } from 'lucide-react';
import './slides.css';

const Slides = () => {
  const slides = [
    { title: "Proposal Presentation", type: "PowerPoint", fileUrl: "/documents/24-25J-298 proposlpresentation.pptx" },
    { title: "Progress Presentation -1", type: "PowerPoint", fileUrl: "/documents/PP1Presentation.pptx" },
    { title: "Progress Presentation -2", type: "PowerPoint", fileUrl: "/documents/PP2Presentation.pptx" },
    { title: "Final Presentation", type: "PowerPoint", fileUrl: "/documents/" }
  ];

  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // Extracts the file name from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="slides" className="slides-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"style={{ color: 'white' }}>Slides</h2>
          <div className="section-divider"></div>
        </div>
        <div className="slides-row">
          {slides.map((slide, index) => (
            <div key={index} className="slide-card">
              <div className="slide-content">
                <div className="slide-icon">
                  <FileText size={32} />
                </div>
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-type">{slide.type}</p>
              </div>
              <button className="download-button-1" onClick={() => handleDownload(slide.fileUrl)}>
                <Download size={20} className="button-icon" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;
