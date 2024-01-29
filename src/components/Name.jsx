import { Stats } from "./Stats";

export function Name({ driver, driverWins, driverChampionships }) {
  return (
    <div className="data">
      <h1 className="name-header">
        {driver["Driver"]["givenName"] + " " + driver["Driver"]["familyName"]}
      </h1>
      <p>{driver.team}</p>
      <Stats
        driver={driver}
        driverWins={driverWins}
        driverChampionships={driverChampionships}
      />
    </div>
  );
}
