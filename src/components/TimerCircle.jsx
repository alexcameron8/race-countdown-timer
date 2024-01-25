import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function TimerCircle({ type, time, color }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Use useEffect to update isLoading when time changes
    if (time !== 0) {
      setIsLoading(true);
    }
  }, [time]);
  const total_seconds = 60;
  const total_minutes = 60 * 60;
  const total_hours = 60 * 60 * 24;

  let interval_time = time;
  let total_duration = total_seconds;
  if (type === "minutes") {
    interval_time = time * 60;
    total_duration = total_minutes;
  }
  if (type === "hours") {
    interval_time = time * 60 * 60;
    total_duration = total_hours;
  }
  if (type === "days") {
    interval_time = time * 60 * 60 * 24;
    total_duration = total_hours;
  }

  // Determine if width is mobile
  const isMobile = window.innerWidth < 768 || window.visualViewport.width < 768;
  // Dynamically adjust the size based on screen resolution
  const timer_size = isMobile ? 100 : 225;

  const timerProps = {
    isPlaying: true,
    size: timer_size,
    strokeWidth: 16,
    trailStrokeWidth: 14,
    trailColor: "grey",
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div className="units">{dimension}</div>
      </div>
    );
  };

  return (
    <div id="countdown">
      {isLoading && (
        // https://www.npmjs.com/package/react-countdown-circle-timer?activeTab=readme
        <CountdownCircleTimer
          className={`timer-wheel ${type}`}
          {...timerProps}
          colors={color}
          duration={total_duration}
          initialRemainingTime={interval_time}
          rotation="counterclockwise"
          onComplete={() => ({ shouldRepeat: true })}
        >
          {() => <span>{renderTime(type, time)}</span>}
        </CountdownCircleTimer>
      )}
    </div>
  );
}
