import { Stats } from "./Stats";

export function Name({ driver }) {
  return (
    <div className="data">
      <h1 className="name-header">{driver.name}</h1>
      <p>{driver.team}</p>
      <Stats driver={driver} />
    </div>
  );
}
