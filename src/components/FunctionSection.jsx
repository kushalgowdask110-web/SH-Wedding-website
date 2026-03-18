import React from "react";
import styles from "../styles/functions.module.css";

const events = [
  {
    title: "Reception",
    image: "/reception.jpg",
    date: "22 April 2026",
    time: "5:00 PM",
    location: "Garden Lawn",
    map: "https://maps.google.com",
  },
  {
    title: "Wedding Muhurtham",
    image: "/wedding.jpg",
    date: "23 April 2026",
    time: "9:00 AM",
    location: "Home",
    map: "https://maps.google.com",
  },
  {
    title: "Bigara Uta",
    image: "/bigrautta.jpg",
    date: "23 April 2026",
    time: "11:30 AM",
    location: "Temple",
    map: "https://maps.google.com",
  },
];

const Functions = () => {
  return (
    <section className={styles.functions}>
  <h2>Wedding Events</h2>
  <p className={styles.subtitle}>When & Where</p>

  <div className={styles.grid}>
    {events.map((event, index) => (
      <div
        className={styles.eventCard}
        key={index}
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className={styles.overlay} />

        <div className={styles.eventContent}>
          <h3>{event.title}</h3>
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>

          <button onClick={() => window.open(event.map, "_blank")}>
            View Map
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Functions;