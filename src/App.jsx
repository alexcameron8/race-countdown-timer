/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";
export default App;
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const raw_teams_data = [
  {
    name: "Mercedes",
    image: "/src/assets/icons/mercedes-benz-1.svg",
  },
  {
    name: "Mclaren",
    image: "/src/assets/icons/mclaren-racing-logo.svg",
  },
  {
    name: "Ferrari",
    image: "/src/assets/icons/ferrari.ico",
  },
  {
    name: "Haas",
    image: "/src/assets/icons/haas-f1.svg",
  },
  {
    name: "Stake F1",
    image: "src/assets/icons/stake-f1.PNG",
  },
  {
    name: "Racing Bulls",
    image: "/src/assets/icons/alphatauri.svg",
  },
  {
    name: "Red Bull",
    image: "/src/assets/icons/red-bull-racing-f1.svg",
  },
  {
    name: "Aston Martin",
    image: "/src/assets/icons/aston-martin.svg",
  },
  {
    name: "Alpine",
    image: "/src/assets/icons/alpine-f1-team-1.svg",
  },
  {
    name: "Williams",
    image: "/src/assets/icons/williams-racing-1.svg",
  },
];

const raw_driver_data = [
  {
    image: "/src/assets/carlos-sainz-ferrari-1.jpg",
    name: "Carlos Sainz",
    team: "Ferrari",
    race_wins: 2,
    championships: 0,
  },
  {
    image: "/src/assets/charles-leclerc.jpg",
    name: "Charles Leclerc",
    team: "Ferrari",
    race_wins: 5,
    championships: 0,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

function Header() {
  const [raceData, setRaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamsData, setTeamsData] = useState(null);
  const [selectedRaceId, setSelectedRaceId] = useState(0);

  function handleSelectRaceId(raceName) {
    setSelectedRaceId(raceName);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://ergast.com/api/f1/2024.json").then(
          (res) => res.json()
        );
        const races = response["MRData"]["RaceTable"]["Races"];
        setRaceData(Array.from(races));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="header">
      {loading ? (
        <div className="race-loading"></div>
      ) : (
        <div>
          <SelectDropdown raceData={raceData} onSelect={handleSelectRaceId} />
          <RaceInformation selectedRace={raceData[selectedRaceId]} />
          <RaceTimer selectedRace={raceData[selectedRaceId]} />
          <DriverProfiles />
        </div>
      )}
    </div>
  );
}

const SelectDropdown = ({ raceData, onSelect }) => {
  return (
    <select
      className="race-select"
      onChange={(e) => onSelect(e.target.selectedIndex)}
    >
      {raceData.map((race) => (
        <option key={race["round"]}> {race["raceName"]}</option>
      ))}
    </select>
  );
};

function RaceInformation({ selectedRace }) {
  return (
    <div>
      <p>
        Race Location:
        {selectedRace["Circuit"]["Location"]["country"] +
          "," +
          selectedRace["Circuit"]["Location"]["locality"]}
      </p>
      <p>Track Name: {selectedRace["Circuit"]["circuitName"]}</p>
      <p>Date: {selectedRace["date"]}</p>
    </div>
  );
}

function RaceTimer({ selectedRace }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const raceStartDate = new Date(selectedRace["date"]);

    const countdownInterval = setInterval(function () {
      const currentDate = new Date();
      const timeDifference = raceStartDate - currentDate;

      // Check if the race date has passed
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        console.log("Countdown expired!");
        return;
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
    <div className="timer">
      <TimerCircle type="days" time={days} color={"blue"} />
      <TimerCircle type="hours" time={hours} color={"white"} />
      <TimerCircle type="minutes" time={minutes} color={"yellow"} />
      <TimerCircle type="seconds" time={seconds} color={"red"} />
    </div>
  );
}

function TimerCircle({ type, time, color }) {
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
  const timerProps = {
    isPlaying: true,
    size: 225,
    strokeWidth: 16,
    trailStrokeWidth: 14,
    trailColor: "grey",
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  console.log(type);
  console.log(isLoading);

  return (
    <div id="countdown">
      {isLoading && (
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

function DriverProfiles() {
  const driver_data = JSON.parse(JSON.stringify(raw_driver_data));
  return (
    <div>
      <Teams />
      <div className="driver-container">
        <div className="driver-profiles">
          <DriverProfile driver={driver_data[0]} />
          <DriverProfile driver={driver_data[1]} />
        </div>
      </div>
    </div>
  );
}

function Teams() {
  const teams_data = JSON.parse(JSON.stringify(raw_teams_data));
  return (
    <div className="teams-container">
      <ul className="teams-list">
        {teams_data.map((teamItem) => (
          <Team team={teamItem} key={teamItem.name} />
        ))}
      </ul>
    </div>
  );
}
function Team({ team }) {
  return (
    <li className="team-li">
      <img className="teamLogo" src={team.image} alt={team.name} />
      <p>{team.name}</p>
    </li>
  );
}

function DriverProfile({ driver }) {
  return (
    <div className="driver-profile">
      <DriverImg driver={driver} />
      <Name driver={driver} />
    </div>
  );
}
function DriverImg({ driver }) {
  return <img className="avatar" src={driver.image} alt={driver.name} />;
}

function Stats({ driver }) {
  return (
    <div>
      <h3>#14</h3>
      <p>Championships: {driver.championships}🏆</p>
      <p>Race Wins: {driver.race_wins}🏁</p>
    </div>
  );
}

function Name({ driver }) {
  return (
    <div className="data">
      <h1 className="name-header">{driver.name}</h1>
      <p>{driver.team}</p>
      <Stats driver={driver} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      This website is for non-commercial use and is not affiliated with Formula
      1, the official Formula 1 website, or any official Formula 1 entities.
    </footer>
  );
}
