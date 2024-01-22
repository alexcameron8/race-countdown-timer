/* eslint-disable react/prop-types */
import "./App.css";

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

function Footer() {
  return (
    <footer>
      This website is for non-commercial use and is not affiliated with Formula
      1, the official Formula 1 website, or any official Formula 1 entities.
    </footer>
  );
}

export default App;
