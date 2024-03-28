import { useEffect } from "react";
import { useState } from "react";

export function SelectDropdown({ raceData, onSelect }) {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);

  useEffect(() => {
    // Find the index of the closest or next race date compared to the current date
    const currentDate = new Date();
    let closestIndex = 0;
    let closestDiff = Infinity; // Set initial closestDiff to Infinity
    for (let i = 0; i < raceData.length; i++) {
      const raceDate = new Date(raceData[i].date);
      const diff = raceDate - currentDate;

      // Check if race date has already passed
      if (diff < 0) {
        continue; // Skip this race date
      }

      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = i;
      }
    }

    // Set the selected race index to the closest or next race date
    if (closestIndex !== selectedRaceIndex) {
      setSelectedRaceIndex(closestIndex);
    }
  }, []);

  return (
    <div className="race-select-container">
      <select
        required
        className="text-xl font-base text-black cursor-pointer rounded-2xl text-center border-black border-2"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        value={selectedRaceIndex}
        onChange={(e) => {
          const selectedIndex = e.target.value;
          setSelectedRaceIndex(selectedIndex);
          onSelect(selectedIndex);
        }}
      >
        {raceData.slice().map((race, index) => {
          return (
            <option className="" key={race.round} value={index}>
              {race.raceName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
