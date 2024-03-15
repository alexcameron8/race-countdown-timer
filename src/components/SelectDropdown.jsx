import { useEffect } from "react";
import { useState } from "react";

export function SelectDropdown({ raceData, onSelect }) {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);

  useEffect(() => {
  // Find the index of the closest or next race date compared to the current date
  const currentDate = new Date();
  let closestIndex = 0;
  let closestDiff = Math.abs(currentDate - new Date(raceData[0].date));
  for (let i = 1; i < raceData.length; i++) {
    const diff = Math.abs(currentDate - new Date(raceData[i].date));
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
        className="race-select"
        value={selectedRaceIndex}
        onChange={(e) => { 
          const selectedIndex = e.target.value;
          setSelectedRaceIndex(selectedIndex);
          onSelect(selectedIndex);}}
      >
        {raceData.slice().map((race, index) => { 
          console.log(race.date)
          return(
          <option className="race-option" key={race.round} value={index}>
            {race.raceName}
          </option>
        )})}
      </select>
    </div>
  );
}
