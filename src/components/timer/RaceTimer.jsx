import { useEffect, useState } from "react";
import { TimerCircle } from "./TimerCircle";

export function RaceTimer({ selectedRace }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [raceExpired, setRaceExpired] = useState(false);

  useEffect(() => {
    const raceStartDate = new Date(selectedRace["date"]);

    const countdownInterval = setInterval(function () {
      const currentDate = new Date();
      const timeDifference = raceStartDate - currentDate;

      // Check if the race date has passed
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        setRaceExpired(true);
        return;
      } else {
        setRaceExpired(false);
      }
      const newDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
      // console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000); // Update every second
    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds, selectedRace]);
  return (
    <div>
      {!raceExpired ? (
        <div
          className=" flex flex-row mx-40 rounded-2xl my-8"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.4)` }}
        >
          <TimerCircle type="days" time={days} color={"blue"} />
          <TimerCircle type="hours" time={hours} color={"white"} />
          <TimerCircle type="minutes" time={minutes} color={"yellow"} />
          <TimerCircle type="seconds" time={seconds} color={"red"} />
        </div>
      ) : (
        <div className="timer-error">
          This round has already taken place! ({selectedRace["date"]})
        </div>
      )}
    </div>
  );
}
