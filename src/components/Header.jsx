import { useEffect, useState } from "react";
import { SelectDropdown } from "./SelectDropdown";
import { RaceInformation } from "./RaceInformation";
import { RaceTimer } from "./RaceTimer";

export function Header() {
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
        <>
          <div className="header">
            <SelectDropdown raceData={raceData} onSelect={handleSelectRaceId} />
          </div>
          <div className="landing">
            <div className="race-info-container">
              <RaceInformation selectedRace={raceData[selectedRaceId]} />
            </div>
            <RaceTimer selectedRace={raceData[selectedRaceId]} />
          </div>
        </>
      )}
    </div>
  );
}
