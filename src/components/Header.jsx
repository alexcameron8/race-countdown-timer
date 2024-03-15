import { useEffect, useState } from "react";
import { RaceInformation } from "./RaceInformation";
import { RaceTimer } from "./RaceTimer";

export function Header({ handleSelectYear, year }) {
  const [raceData, setRaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRaceId, setSelectedRaceId] = useState(0);
  const years_list = ["2024", "2023", "2022", "2021", "2020"]; //Temporary prev 5 years of data available

  function handleSelectRaceId(raceName) {
    setSelectedRaceId(raceName);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${year}.json`
        ).then((res) => res.json());
        const races = response["MRData"]["RaceTable"]["Races"];
        // Find the closest or next race date compared to the current date
        const currentDate = new Date();
        let closestIndex = 0;
        let closestDiff = Infinity;
        races.forEach((race, index) => {
          const raceDate = new Date(race.date);
          const diff = raceDate - currentDate;
          if (diff >= 0 && diff < closestDiff) {
            closestDiff = diff;
            closestIndex = index;
          }
        });

        setSelectedRaceId(closestIndex);
        setRaceData(Array.from(races));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year]);
  return (
    <div className="header-container">
      {loading ? (
        <div className="race-loading"></div>
      ) : (
        <>
          <div className="header">
            <div className="title">{year} Formula 1 Race Countdown</div>
            <div className="controls">
              <select
                className="race-select"
                onChange={(e) => handleSelectYear(e.target.value)}
              >
                {years_list.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="landing">
            <div className="race-info-container">
              <RaceInformation
                selectedRace={raceData[selectedRaceId]}
                handleSelectRaceId={handleSelectRaceId}
                raceData={raceData}
                year={year}
              />
            </div>
            <RaceTimer selectedRace={raceData[selectedRaceId]} />
          </div>
        </>
      )}
    </div>
  );
}
