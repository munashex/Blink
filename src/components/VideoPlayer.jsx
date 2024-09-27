import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <video 
      ref={videoRef}
      src={src}
      muted
      autoPlay
      playsInline
      loop
      className="h-20 rounded-2xl md:h-24 lg:h-32"
    />
  );
};

export default VideoPlayer;