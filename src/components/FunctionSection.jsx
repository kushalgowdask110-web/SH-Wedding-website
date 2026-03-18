import React, { useEffect, useRef } from "react";
import styles from "../styles/functions.module.css";
import { events } from "../data/events.js";

const Functions = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.functions}>
      <h2>Wedding Events</h2>
      <p className={styles.subtitle}>When & Where</p>

      <div className={styles.grid}>
        {events.map((event, index) => (
          <div
            className={styles.eventCard}
            key={event.title}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img
              src={event.image}
              alt={event.title}
              className={styles.bgImage}
            />

            <div className={styles.overlay} />

            <div className={styles.eventContent}>
              <h3>{event.title}</h3>
              <p>📅 {event.date}</p>
              <p className={styles.time}>⏰ {event.time}</p>
              <p className={styles.location}>📍 {event.location}</p>

              <a
                href={event.map}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                View Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Functions;