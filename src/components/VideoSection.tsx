import React from 'react';

// YouTube video ID for a real estate tour
const youtubeVideoId = "3YFpmkt4e2c"; // Real estate showcase video

const VideoSection: React.FC = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
