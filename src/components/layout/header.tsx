import { useEffect, useState } from "react";
import "./layout.css";

const HeaderComponent = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const getCurrentTimeOfDay = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Morning!";
      } else if (currentHour >= 12 && currentHour < 17) {
        return "Afternoon!";
      } else {
        return "Evening!";
      }
    };

    setTimeOfDay(getCurrentTimeOfDay());
  }, []);

  return (
    <div className="header">
      <div className="d-flex flex-column">
        <p className="mb-0">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3>Good {timeOfDay}</h3>
      </div>

      <div className="d-flex flex-column align-items-end">
        <p className="mb-0">Mike Brodowski</p>
        <span className="text-muted" style={{ fontWeight: 300 }}>
          Manager
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
