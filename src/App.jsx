/* eslint-disable react/prop-types */
import "./App.css";
export default App;
import { DriverProfiles } from "./components/DriverProfiles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [year, setYear] = useState("2024");
  function handleSelectYear(year) {
    setYear(year);
  }

  return (
    <div className="app">
      <Header handleSelectYear={handleSelectYear} year={year} />
      <DriverProfiles year={year} />
      <Footer />
    </div>
  );
}
