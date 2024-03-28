import { useEffect, useState } from "react";
import { RaceInformation } from "./RaceInformation";
import { RaceTimer } from "../timer/RaceTimer";

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
    <div>
      {loading ? (
        <div className="flex" style={{ backgroundColor: "#ef233c" }}></div>
      ) : (
        <>
          <div className="my-2 flex flex-row items-center justify-between">
            <div className="mx-auto">
              <h1 className="self-center justify-center flex bg-black my-1 uppercase font-extrabold text-center text-3xl text-white">
                {year} Formula 1 Race Countdown
              </h1>
            </div>
            <div className="top-0 right-0 items-center justify-end mx-2">
              <select
                className="bg-white text-black rounded-lg p-1 text-center text-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
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

          <div className="py-8 p-4 " style={{ backgroundColor: "#ef233c" }}>
            <div
              className="overflow-hidden mx-40 mb-2 rounded-xl items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
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
