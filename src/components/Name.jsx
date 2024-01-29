import { Stats } from "./Stats";

export function Name({ driver }) {
  console.log(driver);
  return (
    <div className="data">
      <h1 className="name-header">
        {driver["Driver"]["givenName"] + " " + driver["Driver"]["familyName"]}
      </h1>
      <p>{driver.team}</p>
      <Stats driver={driver} />
    </div>
  );
}
