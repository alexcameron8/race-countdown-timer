import { DriverProfile } from "./DriverProfile";
import { Teams } from "./Teams";
import { useEffect, useState } from "react";

// At the time of development (Jan 2024) the ergcast API standings,
// driver lineups are not published, so temporary data will be used in the meantime.
const raceResults = {
  season: "2024",
  round: "24",
  DriverStandings: [
    {
      position: "1",
      positionText: "1",
      points: "575",
      wins: "19",
      Driver: {
        code: "VER",
        dateOfBirth: "1997-09-30",
        driverId: "max_verstappen",
        familyName: "Verstappen",
        givenName: "Max",
        nationality: "Dutch",
        permanentNumber: "33",
        url: "http://en.wikipedia.org/wiki/Max_Verstappen",
      },
      Constructors: [
        {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian",
        },
      ],
    },
    {
      position: "2",
      positionText: "2",
      points: "285",
      wins: "2",
      Driver: {
        driverId: "perez",
        permanentNumber: "11",
        code: "PER",
        url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
        givenName: "Sergio",
        familyName: "Pérez",
        dateOfBirth: "1990-01-26",
        nationality: "Mexican",
      },
      Constructors: [
        {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian",
        },
      ],
    },
    {
      position: "3",
      positionText: "3",
      points: "234",
      wins: "0",
      Driver: {
        driverId: "hamilton",
        permanentNumber: "44",
        code: "HAM",
        url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British",
      },
      Constructors: [
        {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German",
        },
      ],
    },
    {
      position: "4",
      positionText: "4",
      points: "206",
      wins: "0",
      Driver: {
        driverId: "alonso",
        permanentNumber: "14",
        code: "ALO",
        url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
        givenName: "Fernando",
        familyName: "Alonso",
        dateOfBirth: "1981-07-29",
        nationality: "Spanish",
      },
      Constructors: [
        {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British",
        },
      ],
    },
    {
      position: "5",
      positionText: "5",
      points: "206",
      wins: "0",
      Driver: {
        driverId: "leclerc",
        permanentNumber: "16",
        code: "LEC",
        url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
        givenName: "Charles",
        familyName: "Leclerc",
        dateOfBirth: "1997-10-16",
        nationality: "Monegasque",
      },
      Constructors: [
        {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian",
        },
      ],
    },
    {
      position: "6",
      positionText: "6",
      points: "205",
      wins: "0",
      Driver: {
        driverId: "norris",
        permanentNumber: "4",
        code: "NOR",
        url: "http://en.wikipedia.org/wiki/Lando_Norris",
        givenName: "Lando",
        familyName: "Norris",
        dateOfBirth: "1999-11-13",
        nationality: "British",
      },
      Constructors: [
        {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British",
        },
      ],
    },
    {
      position: "7",
      positionText: "7",
      points: "200",
      wins: "1",
      Driver: {
        driverId: "sainz",
        permanentNumber: "55",
        code: "SAI",
        url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
        givenName: "Carlos",
        familyName: "Sainz",
        dateOfBirth: "1994-09-01",
        nationality: "Spanish",
      },
      Constructors: [
        {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian",
        },
      ],
    },
    {
      position: "8",
      positionText: "8",
      points: "175",
      wins: "0",
      Driver: {
        driverId: "russell",
        permanentNumber: "63",
        code: "RUS",
        url: "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
        givenName: "George",
        familyName: "Russell",
        dateOfBirth: "1998-02-15",
        nationality: "British",
      },
      Constructors: [
        {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German",
        },
      ],
    },
    {
      position: "9",
      positionText: "9",
      points: "97",
      wins: "0",
      Driver: {
        driverId: "piastri",
        permanentNumber: "81",
        code: "PIA",
        url: "http://en.wikipedia.org/wiki/Oscar_Piastri",
        givenName: "Oscar",
        familyName: "Piastri",
        dateOfBirth: "2001-04-06",
        nationality: "Australian",
      },
      Constructors: [
        {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British",
        },
      ],
    },
    {
      position: "10",
      positionText: "10",
      points: "74",
      wins: "0",
      Driver: {
        driverId: "stroll",
        permanentNumber: "18",
        code: "STR",
        url: "http://en.wikipedia.org/wiki/Lance_Stroll",
        givenName: "Lance",
        familyName: "Stroll",
        dateOfBirth: "1998-10-29",
        nationality: "Canadian",
      },
      Constructors: [
        {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British",
        },
      ],
    },
    {
      position: "11",
      positionText: "11",
      points: "62",
      wins: "0",
      Driver: {
        driverId: "gasly",
        permanentNumber: "10",
        code: "GAS",
        url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
        givenName: "Pierre",
        familyName: "Gasly",
        dateOfBirth: "1996-02-07",
        nationality: "French",
      },
      Constructors: [
        {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French",
        },
      ],
    },
    {
      position: "12",
      positionText: "12",
      points: "58",
      wins: "0",
      Driver: {
        driverId: "ocon",
        permanentNumber: "31",
        code: "OCO",
        url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
        givenName: "Esteban",
        familyName: "Ocon",
        dateOfBirth: "1996-09-17",
        nationality: "French",
      },
      Constructors: [
        {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French",
        },
      ],
    },
    {
      position: "13",
      positionText: "13",
      points: "27",
      wins: "0",
      Driver: {
        driverId: "albon",
        permanentNumber: "23",
        code: "ALB",
        url: "http://en.wikipedia.org/wiki/Alexander_Albon",
        givenName: "Alexander",
        familyName: "Albon",
        dateOfBirth: "1996-03-23",
        nationality: "Thai",
      },
      Constructors: [
        {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British",
        },
      ],
    },
    {
      position: "14",
      positionText: "14",
      points: "17",
      wins: "0",
      Driver: {
        driverId: "tsunoda",
        permanentNumber: "22",
        code: "TSU",
        url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
        givenName: "Yuki",
        familyName: "Tsunoda",
        dateOfBirth: "2000-05-11",
        nationality: "Japanese",
      },
      Constructors: [
        {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian",
        },
      ],
    },
    {
      position: "15",
      positionText: "15",
      points: "10",
      wins: "0",
      Driver: {
        driverId: "bottas",
        permanentNumber: "77",
        code: "BOT",
        url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
        givenName: "Valtteri",
        familyName: "Bottas",
        dateOfBirth: "1989-08-28",
        nationality: "Finnish",
      },
      Constructors: [
        {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss",
        },
      ],
    },
    {
      position: "16",
      positionText: "16",
      points: "9",
      wins: "0",
      Driver: {
        driverId: "hulkenberg",
        permanentNumber: "27",
        code: "HUL",
        url: "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
        givenName: "Nico",
        familyName: "Hülkenberg",
        dateOfBirth: "1987-08-19",
        nationality: "German",
      },
      Constructors: [
        {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American",
        },
      ],
    },
    {
      position: "17",
      positionText: "17",
      points: "6",
      wins: "0",
      Driver: {
        driverId: "ricciardo",
        permanentNumber: "3",
        code: "RIC",
        url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
        givenName: "Daniel",
        familyName: "Ricciardo",
        dateOfBirth: "1989-07-01",
        nationality: "Australian",
      },
      Constructors: [
        {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian",
        },
      ],
    },
    {
      position: "18",
      positionText: "18",
      points: "6",
      wins: "0",
      Driver: {
        driverId: "zhou",
        permanentNumber: "24",
        code: "ZHO",
        url: "http://en.wikipedia.org/wiki/Zhou_Guanyu",
        givenName: "Guanyu",
        familyName: "Zhou",
        dateOfBirth: "1999-05-30",
        nationality: "Chinese",
      },
      Constructors: [
        {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss",
        },
      ],
    },
    {
      position: "19",
      positionText: "19",
      points: "3",
      wins: "0",
      Driver: {
        driverId: "kevin_magnussen",
        permanentNumber: "20",
        code: "MAG",
        url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
        givenName: "Kevin",
        familyName: "Magnussen",
        dateOfBirth: "1992-10-05",
        nationality: "Danish",
      },
      Constructors: [
        {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American",
        },
      ],
    },
    {
      position: "20",
      positionText: "20",
      points: "1",
      wins: "0",
      Driver: {
        driverId: "sargeant",
        permanentNumber: "2",
        code: "SAR",
        url: "http://en.wikipedia.org/wiki/Logan_Sargeant",
        givenName: "Logan",
        familyName: "Sargeant",
        dateOfBirth: "2000-12-31",
        nationality: "American",
      },
      Constructors: [
        {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British",
        },
      ],
    },
  ],
};

export function DriverProfiles({ year }) {
  const [activeTeam, setActiveTeam] = useState(null);
  const [driverStandingsData, setDriverStandingsData] = useState(null);
  const [activeDrivers, setActiveDrivers] = useState([]);

  function handleSetActiveTeam(activeTeam) {
    setActiveTeam(activeTeam);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${year}/driverStandings.json`
        ).then((res) => res.json());
        const driverStandings =
          response["MRData"]["StandingsTable"]["StandingsLists"][0];
        if (driverStandings?.length === 0 || driverStandings === undefined) {
          setDriverStandingsData(raceResults);
        } else {
          setDriverStandingsData(driverStandings);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [year]);

  useEffect(() => {
    if (activeTeam !== null && driverStandingsData !== null) {
      // Temporary logic to address 2024 driver API lack of data
      let constructorId = activeTeam.constructorId;
      if (activeTeam.constructorId === "stake") {
        constructorId = "alfa";
      }
      if (activeTeam.constructorId === "vcarb") {
        constructorId = "alphatauri";
      }

      const updatedActiveDrivers = driverStandingsData["DriverStandings"]
        .slice()
        .filter(
          (driver) =>
            driver["Constructors"][0]["constructorId"] === constructorId
        );

      setActiveDrivers(updatedActiveDrivers);
    }
  }, [activeTeam, driverStandingsData]);

  return (
    <div>
      <Teams year={year} setActiveTeam={handleSetActiveTeam} />
      {activeTeam === null || driverStandingsData === null ? (
        <div>Placeholder Loading</div>
      ) : (
        <div className="driver-container">
          <div className="team-name">{activeTeam.name}</div>
          <div className="driver-profiles">
            {/* <DriverProfile driver={active_drivers[0]} />
            <DriverProfile driver={active_drivers[1]} /> */}
            {activeDrivers.map((driver, index) => (
              <DriverProfile key={index} driver={driver} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
