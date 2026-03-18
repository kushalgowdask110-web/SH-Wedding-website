import React from "react";
import styles from "../styles/venue.module.css";

const VenueSection = () => {
  return (
    <section className={styles.venue}>
      <h2>Venue</h2>
      <p className={styles.subtitle}>Join us at</p>

      <div className={styles.card}>
        <h3>Smt. Jayamma Shri Ramuswamy Samudaya Bhavana</h3>

        <p>
          Krishnarajapete, Mandya, Karnataka
        </p>

        <a
          href="https://share.google/vSOHBnW7W8CVmPSp7"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      </div>
    </section>
  );
};

export default VenueSection;