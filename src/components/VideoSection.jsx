import React, { useEffect, useRef, useState } from "react";
import "../styles/videoSection.css";

const VideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  // 👇 Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Control play/pause properly
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !userPaused) {
      video.play().catch(() => {}); // prevent browser errors
    } else {
      video.pause();
    }
  }, [isVisible, userPaused]);

  return (
    <section ref={sectionRef} className="video-section">
      <video
        ref={videoRef}
        className="video-player"
        src="/engagement-teaser.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        controls
        onPause={() => setUserPaused(true)}
        onPlay={() => setUserPaused(false)} // 👈 allow resume
        onLoadedData={() => videoRef.current?.play()} // 👈 mobile fix
      />
    </section>
  );
};

export default VideoSection;