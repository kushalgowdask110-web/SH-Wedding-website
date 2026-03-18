import React, { useEffect, useRef } from "react";
import styles from "../styles/welcome.module.css";

const WelcomeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add(styles.show);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.welcome}>
      <h2 className={styles.heading}>Welcome</h2>

      <div className={styles.divider} />

      <p className={styles.text}>
        With joyful hearts, we invite you to celebrate the beginning of our
        forever.
      </p>

      <p className={styles.names}>
        Sachin <span>&</span> Harshitha
      </p>
    </section>
  );
};

export default WelcomeSection;