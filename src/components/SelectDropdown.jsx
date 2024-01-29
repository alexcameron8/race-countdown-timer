import { useState } from "react";

export function SelectDropdown({ raceData, onSelect }) {
  return (
    <div className="race-select-container">
      <select
        required
        className="race-select"
        onChange={(e) => onSelect(e.target.selectedIndex)}
      >
        {raceData.slice().map((race) => (
          <option className="race-option" key={race["round"]}>
            {race["raceName"]}
          </option>
        ))}
      </select>
    </div>
  );
}
