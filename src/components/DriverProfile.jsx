import { Name } from "./Name";
import { DriverImg } from "./DriverImg";

export function DriverProfile({ driver }) {
  return (
    <div className="driver-profile">
      <DriverImg driver={driver} />
      <Name driver={driver} />
    </div>
  );
}
