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
      return "/assets/circuits/abudhabi.avif";
    case "Australian Grand Prix":
      return "/assets/circuits/australia.avif";
    case "Austrian Grand Prix":
      return "/assets/circuits/austria.avif";
    case "Azerbaijan Grand Prix":
      return "/assets/circuits/azerbaijan.avif";
    case "Bahrain Grand Prix":
      return "/assets/circuits/bahrain.avif";
    case "Belgian Grand Prix":
      return "/assets/circuits/belgium.avif";
    case "British Grand Prix":
      return "/assets/circuits/great-britain.avif";
    case "Canadian Grand Prix":
      return "/assets/circuits/canada.avif";
    case "Chinese Grand Prix":
      return "/assets/circuits/china.avif";
    case "Dutch Grand Prix":
      return "/assets/circuits/netherlands.png";
    case "Emilia Romagna Grand Prix":
      return "/assets/circuits/italy_imola.png";
    case "Hungarian Grand Prix":
      return "/assets/circuits/hungary.avif";
    case "Italian Grand Prix":
      return "/assets/circuits/monza.avif";
    case "Japanese Grand Prix":
      return "/assets/circuits/japan.avif";
    case "Las Vegas Grand Prix":
      return "/assets/circuits/las_vegas.avif";
    case "Mexico City Grand Prix":
      return "/assets/circuits/mexico.avif";
    case "Miami Grand Prix":
      return "/assets/circuits/miami.avif";
    case "Monaco Grand Prix":
      return "/assets/circuits/monaco.png";
    case "Qatar Grand Prix":
      return "/assets/circuits/qatar.avif";
    case "São Paulo Grand Prix":
      return "/assets/circuits/brazil.avif";
    case "Saudi Arabian Grand Prix":
      return "/assets/circuits/Saudi_Arabia.png";
    case "Singapore Grand Prix":
      return "/assets/circuits/singapore.avif";
    case "Spanish Grand Prix":
      return "/assets/circuits/spain.avif";
    case "United States Grand Prix":
      return "/assets/circuits/austin.avif";
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
    <div className="flex center flex-start mb-6 mx-1 ">
      <div className="self-center flex-1 ">
        <div className="items-center justify-center">
          <h1 className="text-3xl text-white font-bold my-4">
            <span className="country-icon">
              {getEmojiFlag(selectedRace["raceName"])}
            </span>
            {selectedRace["Circuit"]["Location"]["country"] +
              ", " +
              selectedRace["Circuit"]["Location"]["locality"]}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h4 className="text-xl text-white font-bold my-4">
            Date: {selectedRace["date"]}
          </h4>
        </div>
        <RaceEvents selectedRace={selectedRace} />
        <div className="flex items-center justify-center">
          <h4 className="text-lg text-white font-bold my-4">
            Race: #{selectedRace["round"]}/{totalRaceCount}
          </h4>
        </div>
        <SelectDropdown raceData={raceData} onSelect={handleSelectRaceId} />
      </div>
      <div className="flex flex-col self-center flex-1 pt-2">
        <div className="flex items-center justify-center">
          <h3 className="text-white font-semibold my-2 text-2xl">
            {selectedRace["Circuit"]["circuitName"]}
          </h3>
        </div>
        <div
          className="rounded-2xl mx-4 p-2 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <img
            className="w-full"
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
    <div className="flex items-center justify-center">
      {/* Check if FirstPractice exists */}
      {selectedRace.FirstPractice && (
        <button
          className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
        <button
          className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
        <button
          className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
        <button
          className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
        <button
          className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
        className="mx-1 cursor-pointer border-2 border-black px-1 hover:scale-105 font-bold text-white hover:text-black"
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
