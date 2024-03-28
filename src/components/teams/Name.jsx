import { Stats } from "./Stats";

export function Name({ driver, driverWins, driverChampionships }) {
  return (
    <div>
      <h1 className="text-3xl font-bold my-2">
        {driver["Driver"]["givenName"] + " " + driver["Driver"]["familyName"]}
      </h1>
      <Stats
        driver={driver}
        driverWins={driverWins}
        driverChampionships={driverChampionships}
      />
    </div>
  );
}
