import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <iframe 
          allowFullScreen 
          width="760" 
          height="515" 
          src="https://play.innerloop.stream/playersvc/ins-share/cu-trwOmMszaQIPUrYZpUapc"
          title="Zillow Are We Doing This"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
