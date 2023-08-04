import React from 'react';

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div>
      <video controls width="500" height="300">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
