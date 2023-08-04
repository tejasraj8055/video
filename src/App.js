import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const videoSnippets = [
    '/videos/sample-5s.mp4',
    '/videos/sample-10s.mp4',
    '/videos/sample-15s.mp4',
    // Add more video URLs as needed
  ];

  return (
    <div>
      <h1>Video Snippets</h1>
      {videoSnippets.map((videoSrc, index) => (
        <VideoPlayer key={index} videoSrc={videoSrc} />
      ))}
    </div>
  );
};

export default App;
