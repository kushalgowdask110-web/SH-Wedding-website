import React, { useEffect, useState } from "react";
import styles from "../styles/saveDate.module.css";

const weddingDate = new Date("2026-04-22T00:00:00");

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

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

  const handleSave = () => {
    const title = "Sachin & Harshitha Wedding";
    const details = "We’re getting married!";
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
      <div className={styles.saveContent}>
        <h1>Sachin X Harshitha</h1>
        <p className={styles.subtitle}>We’re getting married</p>

        <div className={styles.dateRow}>
          <span>save the date</span>
          <span>22–23 April 2026</span>
        </div>

        <button onClick={handleSave}>save</button>

        <div className={styles.countdown}>
          <div>
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;