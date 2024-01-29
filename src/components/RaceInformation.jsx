import { useState } from "react";
import { SelectDropdown } from "./SelectDropdown";

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
      return "/public/assets/circuits/abudhabi.avif";
    case "Australian Grand Prix":
      return "/public/assets/circuits/australia.avif";
    case "Austrian Grand Prix":
      return "/public/assets/circuits/austria.avif";
    case "Azerbaijan Grand Prix":
      return "/public/assets/circuits/azerbaijan.avif";
    case "Bahrain Grand Prix":
      return "/public/assets/circuits/bahrain.avif";
    case "Belgian Grand Prix":
      return "/public/assets/circuits/belgium.avif";
    case "British Grand Prix":
      return "/public/assets/circuits/great-britain.avif";
    case "Canadian Grand Prix":
      return "/public/assets/circuits/canada.avif";
    case "Chinese Grand Prix":
      return "/public/assets/circuits/china.avif";
    case "Dutch Grand Prix":
      return "/public/assets/circuits/netherlands.png";
    case "Emilia Romagna Grand Prix":
      return "/public/assets/circuits/italy_imola.png";
    case "Hungarian Grand Prix":
      return "/public/assets/circuits/hungary.avif";
    case "Italian Grand Prix":
      return "/public/assets/circuits/monza.avif";
    case "Japanese Grand Prix":
      return "/public/assets/circuits/japan.avif";
    case "Las Vegas Grand Prix":
      return "/public/assets/circuits/las_vegas.avif";
    case "Mexico City Grand Prix":
      return "/public/assets/circuits/mexico.avif";
    case "Miami Grand Prix":
      return "/public/assets/circuits/miami.avif";
    case "Monaco Grand Prix":
      return "/public/assets/circuits/monaco.png";
    case "Qatar Grand Prix":
      return "/public/assets/circuits/qatar.avif";
    case "São Paulo Grand Prix":
      return "/public/assets/circuits/brazil.avif";
    case "Saudi Arabian Grand Prix":
      return "/public/assets/circuits/Saudi_Arabia.png";
    case "Singapore Grand Prix":
      return "/public/assets/circuits/singapore.avif";
    case "Spanish Grand Prix":
      return "/public/assets/circuits/spain.avif";
    case "United States Grand Prix":
      return "/public/assets/circuits/austin.avif";
    default:
      return "Unknown Flag";
  }
}
export function RaceInformation({
  raceData,
  selectedRace,
  handleSelectRaceId,
  year,
}) {
  const totalRaceCount = raceData.length;
  return (
    <div className="race-information-container">
      <div className="race-information">
        <div className="race-title-container">
          {/* <p> Location: </p> */}
          <h1>
            <span className="country-icon">
              {getEmojiFlag(selectedRace["raceName"])}
            </span>
            {selectedRace["Circuit"]["Location"]["country"] +
              ", " +
              selectedRace["Circuit"]["Location"]["locality"]}
          </h1>
        </div>
        <div className="race-line-container">
          <h4>Date: {selectedRace["date"]}</h4>
        </div>
        <RaceEvents selectedRace={selectedRace} />
        <div className="race-line-container">
          <h4>
            Race: #{selectedRace["round"]}/{totalRaceCount}
          </h4>
        </div>
        <SelectDropdown raceData={raceData} onSelect={handleSelectRaceId} />
      </div>
      <div className="circuit-container">
        <div className="race-line-container">
          {/* <p> Circuit: </p> */}
          <h3>{selectedRace["Circuit"]["circuitName"]}</h3>
        </div>
        <div className="image-container">
          <img
            className="circuit-image"
            src={getCircuitPNG(selectedRace["raceName"])}
            alt={selectedRace["round"]}
          />
        </div>
      </div>
    </div>
  );
}

export function RaceEvents({ selectedRace }) {
  const [session, setSession] = useState("Race");

  function handleSetSession(type) {
    setSession(() => type);
    console.log("To-Do: Update Timer!!!");
  }

  return (
    <div className="button-sessions-container">
      {/* Check if FirstPractice exists */}
      {selectedRace.FirstPractice && (
        // <div>
        //   <h3>First Practice</h3>
        //   <p>Date: {selectedRace.FirstPractice.date}</p>
        //   <p>Time: {selectedRace.FirstPractice.time}</p>
        // </div>
        <button
          className="button-session"
          onClick={() => handleSetSession("FP1")}
          style={{
            backgroundColor:
              session === "FP1" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)",
          }}
        >
          FP1
        </button>
      )}

      {/* Check if SecondPractice exists */}
      {selectedRace.SecondPractice && (
        // <div>
        //   <h3>Second Practice</h3>
        //   <p>Date: {selectedRace.SecondPractice.date}</p>
        //   <p>Time: {selectedRace.SecondPractice.time}</p>
        // </div>
        <button
          className="button-session"
          onClick={() => handleSetSession("FP2")}
          style={{
            backgroundColor:
              session === "FP2" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)",
          }}
        >
          FP2
        </button>
      )}

      {/* Check if ThirdPractice exists */}
      {selectedRace.ThirdPractice && (
        // <div>
        //   <h3>Third Practice</h3>
        //   <p>Date: {selectedRace.ThirdPractice.date}</p>
        //   <p>Time: {selectedRace.ThirdPractice.time}</p>
        // </div>
        <button
          className="button-session"
          onClick={() => handleSetSession("FP3")}
          style={{
            backgroundColor:
              session === "FP3" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)",
          }}
        >
          FP3
        </button>
      )}

      {/* Check if Qualifying exists */}
      {selectedRace.Qualifying && (
        // <div>
        //   <h3>Qualifying</h3>
        //   <p>Date: {selectedRace.Qualifying.date}</p>
        //   <p>Time: {selectedRace.Qualifying.time}</p>
        // </div>
        <button
          className="button-session"
          onClick={() => handleSetSession("Qualifying")}
          style={{
            backgroundColor:
              session === "Qualifying"
                ? "rgba(255, 0, 0, 0.3)"
                : "rgba(0, 0, 0, 0.3)",
          }}
        >
          Qualifying
        </button>
      )}
      {/* Check if Sprint exists */}
      {selectedRace.Sprint && (
        // <div>
        //   <h3>Sprint</h3>
        //   <p>Date: {selectedRace.Sprint.date}</p>
        //   <p>Time: {selectedRace.Sprint.time}</p>
        // </div>
        <button
          className="button-session"
          onClick={() => handleSetSession("Sprint")}
          style={{
            backgroundColor:
              session === "Sprint"
                ? "rgba(255, 0, 0, 0.3)"
                : "rgba(0, 0, 0, 0.3)",
          }}
        >
          Sprint
        </button>
      )}
      <button
        className="button-session"
        onClick={() => handleSetSession("Race")}
        style={{
          backgroundColor:
            session === "Race" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)",
        }}
      >
        Race
      </button>
    </div>
  );
}
