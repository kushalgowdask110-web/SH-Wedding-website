import { useEffect } from "react";

import VideoSection from "./components/VideoSection";
import WelcomeSection from "./components/WelcomeSection";
import SaveTheDate from "./components/DateSection";
import Functions from "./components/FunctionSection";
import VenueSection from "./components/VenueSection";

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <VideoSection />
      <SaveTheDate />
      <Functions />
      <VenueSection />
      <WelcomeSection />
    </>
  );
}

export default App;