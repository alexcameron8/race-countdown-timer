import { DriverProfile } from "./DriverProfile";
import { Teams } from "./Teams";

export const raw_driver_data = [
  {
    image: "/src/assets/carlos-sainz-ferrari-1.jpg",
    name: "Carlos Sainz",
    team: "Ferrari",
    race_wins: 2,
    championships: 0,
  },
  {
    image: "/src/assets/charles-leclerc.jpg",
    name: "Charles Leclerc",
    team: "Ferrari",
    race_wins: 5,
    championships: 0,
  },
];

export function DriverProfiles() {
  const driver_data = JSON.parse(JSON.stringify(raw_driver_data));
  return (
    <div>
      <Teams />
      <div className="driver-container">
        <div className="driver-profiles">
          <DriverProfile driver={driver_data[0]} />
          <DriverProfile driver={driver_data[1]} />
        </div>
      </div>
    </div>
  );
}
