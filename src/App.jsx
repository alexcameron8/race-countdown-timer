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
      <DriverProfiles />
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
    <div className="header-container">
      {loading ? (
        <div className="race-loading"></div>
      ) : (
        <div className="header">
          <div className="race-info-container">
            <SelectDropdown raceData={raceData} onSelect={handleSelectRaceId} />
            <RaceInformation selectedRace={raceData[selectedRaceId]} />
          </div>
          <RaceTimer selectedRace={raceData[selectedRaceId]} />
        </div>
      )}
    </div>
  );
}

const SelectDropdown = ({ raceData, onSelect }) => {
  const [raceList, setRaceList] = useState(raceData);

  function handleSetRaceList(type) {
    const orderedRaceDate = raceData
      .slice()
      .sort((a, b) => a.raceName.localeCompare(b.raceName));

    if (type === "numeric") {
      console.log("Num: rounds in order");
      console.log(raceData);
      setRaceList(raceData);
    } else {
      console.log("Alpha: rounds random order");
      console.log(orderedRaceDate);
      setRaceList(() => orderedRaceDate);
    }
    // console.log(raceList);
  }

  return (
    <div className="race-line-container">
      <div className="text-race-info">Select Race:</div>
      <select
        required
        className="race-select"
        onChange={(e) => onSelect(e.target.selectedIndex)}
      >
        {raceList.map((race) => (
          <option className="race-option" key={race["round"]}>
            {race["raceName"]}
          </option>
        ))}
      </select>
      <button className="btn-sort" onClick={() => handleSetRaceList("numeric")}>
        <img
          className="img-btn-sort"
          src="/src/assets/sort-by-numeric-order.png"
          alt="sort-numerical"
        />
      </button>
      <button
        className="btn-sort"
        onClick={() => handleSetRaceList("alphabetical")}
      >
        <img
          className="img-btn-sort"
          src="/src/assets/alphabetical-order.png"
          alt="sort-alphabetical"
        />
      </button>
    </div>
  );
};

function RaceInformation({ selectedRace }) {
  function getEmojiFlag(country) {
    switch (country) {
      case "Abu Dhabi Grand Prix":
        return "🇦🇪";
      case "Australian Grand Prix":
        return "🇦🇺";
      case "Austrian Grand Prix":
        return "🇦🇹";
      case "Azerbaijan Grand Prix":
        return "🇦🇿";
      case "Bahrain Grand Prix":
        return "🇧🇭";
      case "Belgian Grand Prix":
        return "🇧🇪";
      case "British Grand Prix":
        return "🇬🇧";
      case "Canadian Grand Prix":
        return "🇨🇦";
      case "Chinese Grand Prix":
        return "🇨🇳";
      case "Dutch Grand Prix":
        return "🇳🇱";
      case "Emilia Romagna Grand Prix":
        return "🇮🇹";
      case "Hungarian Grand Prix":
        return "🇭🇺";
      case "Italian Grand Prix":
        return "🇮🇹";
      case "Japanese Grand Prix":
        return "🇯🇵";
      case "Las Vegas Grand Prix":
        return "🇺🇸";
      case "Mexico City Grand Prix":
        return "🇲🇽";
      case "Miami Grand Prix":
        return "🇺🇸";
      case "Monaco Grand Prix":
        return "🇲🇨";
      case "Qatar Grand Prix":
        return "🇶🇦";
      case "São Paulo Grand Prix":
        return "🇧🇷";
      case "Saudi Arabian Grand Prix":
        return "🇸🇦";
      case "Singapore Grand Prix":
        return "🇸🇬";
      case "Spanish Grand Prix":
        return "🇪🇸";
      case "United States Grand Prix":
        return "🇺🇸";
      default:
        return "Unknown Flag";
    }
  }

  function getCircuitPNG(country) {
    switch (country) {
      case "Abu Dhabi Grand Prix":
        return "/src/assets/circuits/abudhabi.avif";
      case "Australian Grand Prix":
        return "/src/assets/circuits/australia.avif";
      case "Austrian Grand Prix":
        return "/src/assets/circuits/austria.avif";
      case "Azerbaijan Grand Prix":
        return "/src/assets/circuits/azerbaijan.avif";
      case "Bahrain Grand Prix":
        return "/src/assets/circuits/bahrain.avif";
      case "Belgian Grand Prix":
        return "/src/assets/circuits/belgium.avif";
      case "British Grand Prix":
        return "/src/assets/circuits/great-britain.avif";
      case "Canadian Grand Prix":
        return "/src/assets/circuits/canada.avif";
      case "Chinese Grand Prix":
        return "/src/assets/circuits/china.avif";
      case "Dutch Grand Prix":
        return "/src/assets/circuits/netherlands.png";
      case "Emilia Romagna Grand Prix":
        return "/src/assets/circuits/italy_imola.png";
      case "Hungarian Grand Prix":
        return "/src/assets/circuits/hungary.avif";
      case "Italian Grand Prix":
        return "/src/assets/circuits/monza.avif";
      case "Japanese Grand Prix":
        return "/src/assets/circuits/japan.avif";
      case "Las Vegas Grand Prix":
        return "/src/assets/circuits/las_vegas.avif";
      case "Mexico City Grand Prix":
        return "/src/assets/circuits/mexico.avif";
      case "Miami Grand Prix":
        return "/src/assets/circuits/miami.avif";
      case "Monaco Grand Prix":
        return "/src/assets/circuits/monaco.png";
      case "Qatar Grand Prix":
        return "/src/assets/circuits/qatar.avif";
      case "São Paulo Grand Prix":
        return "/src/assets/circuits/brazil.avif";
      case "Saudi Arabian Grand Prix":
        return "/src/assets/circuits/Saudi_Arabia.png";
      case "Singapore Grand Prix":
        return "/src/assets/circuits/singapore.avif";
      case "Spanish Grand Prix":
        return "/src/assets/circuits/spain.avif";
      case "United States Grand Prix":
        return "/src/assets/circuits/austin.avif";
      default:
        return "Unknown Flag";
    }
  }

  return (
    <div className="race-information">
      <div className="race-line-container">
        <p> Location: </p>
        <h1>
          {selectedRace["Circuit"]["Location"]["country"] +
            ", " +
            selectedRace["Circuit"]["Location"]["locality"]}
        </h1>
        <div className="country-icon">
          {getEmojiFlag(selectedRace["raceName"])}
        </div>
      </div>
      <div className="race-line-container">
        <p> Circuit: </p>
        <h3>{selectedRace["Circuit"]["circuitName"]}</h3>
      </div>
      <div className="race-line-container">
        <p> Date: </p>
        <h4>{selectedRace["date"]}</h4>
      </div>
      <div className="race-line-container">
        <p> Race: #{selectedRace["round"]}/24</p>
      </div>
      <div className="circuit-container">
        <img
          src={getCircuitPNG(selectedRace["raceName"])}
          alt={selectedRace["round"]}
        />
      </div>
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
