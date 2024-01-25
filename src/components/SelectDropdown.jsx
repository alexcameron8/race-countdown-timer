import { useState } from "react";

export function SelectDropdown({ raceData, onSelect }) {
  const [raceList, setRaceList] = useState(raceData);

  function handleSetRaceList(type) {
    const orderedRaceDate = raceData
      .slice()
      .sort((a, b) => a.raceName.localeCompare(b.raceName));

    if (type === "numeric") {
      console.log("Num: rounds in order");
      console.log(raceData);
      setRaceList(raceData);
    } else {
      console.log("Alpha: rounds random order");
      console.log(orderedRaceDate);
      setRaceList(() => orderedRaceDate);
    }
  }

  return (
    <div className="race-select-container">
      <div className="text-race-info">Select Race:</div>
      <select
        required
        className="race-select"
        onChange={(e) => onSelect(e.target.selectedIndex)}
      >
        {raceList.map((race) => (
          <option className="race-option" key={race["round"]}>
            {race["raceName"]}
          </option>
        ))}
      </select>
      <button className="btn-sort" onClick={() => handleSetRaceList("numeric")}>
        <img
          className="img-btn-sort"
          src="/src/assets/sort-by-numeric-order.png"
          alt="sort-numerical"
        />
      </button>
      <button
        className="btn-sort"
        onClick={() => handleSetRaceList("alphabetical")}
      >
        <img
          className="img-btn-sort"
          src="/src/assets/alphabetical-order.png"
          alt="sort-alphabetical"
        />
      </button>
    </div>
  );
}
