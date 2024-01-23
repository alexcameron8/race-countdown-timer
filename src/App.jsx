/* eslint-disable react/prop-types */
import "./App.css";

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
  return (
    <div className="header">
      <SelectDropdown />
      <RaceInformation />
      <RaceTimer />
      <DriverProfiles />
    </div>
  );
}

function RaceInformation() {
  return (
    <div>
      <p>Race Location</p>
      <p>Race Track Name</p>
      <p>Race Weekend Date</p>
    </div>
  );
}

function SelectDropdown() {
  return (
    <select>
      <option>Race #1</option>
      <option>Race #2</option>
    </select>
  );
}

function RaceTimer() {
  return (
    <div className="timer">
      <TimerCircle>Days</TimerCircle>
      <TimerCircle>Hours</TimerCircle>
      <TimerCircle>Minutes</TimerCircle>
      <TimerCircle>Seconds</TimerCircle>
    </div>
  );
}

function TimerCircle({ children }) {
  return <p className="circle">{children}</p>;
}

function DriverProfiles() {
  const driver_data = JSON.parse(JSON.stringify(raw_driver_data));
  return (
    <div>
      <Teams />
      <div className="driver-container">
        <div className="driver-profiles">
          <DriverProfile driver={driver_data[0]} />
          <DriverProfile driver={driver_data[0]} />
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

export default App;
