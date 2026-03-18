import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/saveDate.module.css";

const weddingDate = new Date("2026-04-22T00:00:00");

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const containerRef = useRef(null);

  // 🔥 Countdown Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  // 🔥 Entry Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add(styles.show);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Google Calendar Save
  const handleSave = () => {
    const title = "Sachin & Harshitha Wedding";
    const details = "Join us for our wedding celebration!";
    const location = "Krishnarajpete, Karnataka, India";

    const startDate = "20260422T000000Z";
    const endDate = "20260424T000000Z";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.saveDate}>
      <div ref={containerRef} className={styles.saveContent}>
        
        <h1 className={styles.title}>Sachin & Harshitha</h1>
        <p className={styles.subtitle}>We’re getting married</p>

        <div className={styles.dateBlock}>
          <span className={styles.label}>SAVE THE DATE</span>
          <h2 className={styles.date}>22–23 April 2026</h2>
        </div>

        <button onClick={handleSave}>Save</button>

        <div className={styles.countdown}>
          
          <div className={styles.time}>
            <span className={styles.number} key={timeLeft.days}>
              {timeLeft.days}
            </span>
            <p>Days</p>
          </div>

          <div className={styles.time}>
            <span className={styles.number} key={timeLeft.hours}>
              {timeLeft.hours}
            </span>
            <p>Hours</p>
          </div>

          <div className={styles.time}>
            <span className={styles.number} key={timeLeft.minutes}>
              {timeLeft.minutes}
            </span>
            <p>Minutes</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SaveTheDate;