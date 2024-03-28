import { Name } from "./Name";
import { DriverImg } from "./DriverImg";
import { useEffect, useState } from "react";

export function DriverProfile({ driver }) {
  const [driverWins, setDriverWins] = useState([]);
  const [driverChampionships, setDriverChampionships] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // First request for race wins data
        const response_stats = await fetch(
          `https://ergast.com/api/f1/drivers/${driver["Driver"]["driverId"]}/results/1.json`
        ).then((res) => res.json());
        const driverWinsData = response_stats["MRData"];
        if (driverWinsData !== null || driverWinsData.length !== 0) {
          setDriverWins(driverWinsData);
        }

        // Second request for championships data
        const response_championships = await fetch(
          `https://ergast.com/api/f1/drivers/${driver["Driver"]["driverId"]}/driverStandings/1.json`
        ).then((res) => res.json());
        const driverChampionshipData = response_championships["MRData"]; // Adjust this based on the actual response data structure
        if (
          driverChampionshipData !== null ||
          driverChampionshipData.length !== 0
        ) {
          setDriverChampionships(driverChampionshipData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [driver]);

  return (
    <div className="flex-1 rounded-2xl m-4 p-4 bg-white items-center justify-center flex flex-col">
      <DriverImg driver={driver} />
      <Name
        driver={driver}
        driverWins={driverWins}
        driverChampionships={driverChampionships}
      />
    </div>
  );
}
