/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";
export default App;

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
          {/* <DriverProfiles /> */}
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

      if (newDays !== days && newDays === 0) {
        console.log("Days condition.");
      }
      if (newHours !== hours && newHours === 0) {
        console.log("Hours condition.");
      }
      if (newMinutes !== minutes && newMinutes === 0) {
        console.log("Minutes condition.");
      }
      if (newSeconds !== seconds && newSeconds === 0) {
        console.log("Seconds condition:");
        // console.log(`(var) secondsAnimation (True???):" + ${secondsAnimation}`);
      }
      // Logic for calcualting initial rotation

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
      // console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000); // Update every second
    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds, selectedRace]);

  const timeRemaining = [{ days, hours, minutes, seconds }];

  return (
    <div className="timer">
      <TimerCircle type={"Days"} color={"blue"} timeRemaining={timeRemaining}>
        {days}
      </TimerCircle>
      <TimerCircle type={"Hours"} color={"white"} timeRemaining={timeRemaining}>
        {hours}
      </TimerCircle>
      <TimerCircle
        type={"Minutes"}
        color={"yellow"}
        timeRemaining={timeRemaining}
      >
        {minutes}
      </TimerCircle>
      <TimerCircle type={"Seconds"} color={"red"} timeRemaining={timeRemaining}>
        {seconds}
      </TimerCircle>
    </div>
  );
}

function TimerCircle({ type, children, color, timeRemaining }) {
  // console.log(timeRemaining[0]);
  const [rotationSeconds, setRotationSeconds] = useState(
    timeRemaining[0].seconds * 6 - 360
  ); //multiply current time by 6 degrees, subtracted by 360 for start location
  // console.log("Init rotation seconds:" + rotationSeconds);
  const [rotationMinutes, setRotationMinutes] = useState(
    timeRemaining[0].minutes * 6 - 360
  ); //multiply current time by 6 degrees, subtracted by 360 for start location
  const [rotationHours, setRotationHours] = useState(
    timeRemaining[0].hours * 15 - 360
  );
  const calculated_degree_seconds = timeRemaining[0].seconds * 6 - 360;
  const calculated_degree_minutes = timeRemaining[0].minutes * 6 - 360;
  const calculated_degree_hours = timeRemaining[0].hours * 15 - 360;
  let empty_dash_offset_num = timeRemaining[0].seconds * 1.66;
  console.log(
    `empty_dash_offset_num: ${type}:` +
      empty_dash_offset_num +
      `rotationSeconds: ${rotationSeconds}`
  );

  if (rotationSeconds === 0) {
    empty_dash_offset_num = 0;
  }
  const empty_dash_offset_fill = `-${empty_dash_offset_num}px`;
  console.log("Dash offset: " + empty_dash_offset_fill);

  if (rotationSeconds !== calculated_degree_seconds && rotationSeconds !== 0) {
    setRotationSeconds(timeRemaining[0].seconds * 6 - 360);
  }

  // console.log(
  //   "Hours:" +
  //     timeRemaining[0].hours +
  //     " Rotation Degree:" +
  //     rotationHours +
  //     " Should be:" +
  //     temp
  // );
  if (rotationSeconds === -360) {
    setRotationSeconds((prevRotation) => prevRotation - prevRotation);
  }
  if (rotationMinutes === -360) {
    setRotationMinutes((prevRotation) => prevRotation - prevRotation);
  }
  if (rotationHours === -360) {
    setRotationHours((prevRotation) => prevRotation - prevRotation);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // Update rotation for seconds
      setRotationSeconds((prevRotation) => prevRotation - 6); // Rotate by 6 degrees every second (360 / 60)
      // Check if a minute has passed
      if (rotationSeconds % 360 === 0) {
        // Update rotation for minutes
        setRotationMinutes((prevRotation) => prevRotation - 6); // Rotate by 6 degrees every minute (360 / 60)

        // Check if an hour has passed
        if (rotationMinutes % 360 === 0) {
          // Update rotation for hours
          setRotationHours((prevRotation) => prevRotation - 15); // Rotate by 15 degrees every hour (360 / 24)
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let rotation;
  if (type === "Seconds") {
    rotation = rotationSeconds;
  } else if (type === "Minutes") {
    rotation = rotationMinutes;
  } else if (type === "Hours") {
    rotation = rotationHours;
  }
  // console.log("Type: " + type + ", Rotation:" + rotation);
  // transform: `rotate(${
  //   type === "Seconds"
  //     ? rotationSeconds
  //     : type === "Minutes"
  //     ? rotationMinutes
  //     : type === "Hours"
  //     ? rotationHours
  //     : 0

  return (
    <div id="countdown">
      <p className={"circle"}>{type}</p>
      <svg viewBox="0 0 40 40">
        <g
          transform="translate(20 20) rotate(-90)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <circle
            className={"empty-circle " + type.toLowerCase()}
            r="18"
            style={{
              strokeDashoffset: empty_dash_offset_fill,
            }}
          />
          <circle
            className={"remaining-circle " + type.toLowerCase()}
            r="18"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <circle
            className="circle-current"
            r="2"
            cx="18"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </g>
        <text x="20" y="20">
          {children}
        </text>
      </svg>
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
