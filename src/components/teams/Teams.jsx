import { Team } from "./Team";
import { useEffect, useState } from "react";

export const raw_teams_data = [
  {
    constructorId: "alpine",
    name: "Alpine",
    image: "/assets/icons/alpine-f1-team-1.svg",
    nationality: "French",
  },
  {
    constructorId: "aston_martin",
    name: "Aston Martin",
    image: "/assets/icons/aston-martin.svg",
    nationality: "British",
  },
  {
    constructorId: "ferrari",
    name: "Ferrari",
    image: "/assets/icons/ferrari.ico",
    nationality: "Italian",
  },
  {
    constructorId: "haas",
    name: "Haas",
    image: "/assets/icons/haas-f1.svg",
    nationality: "American",
  },
  {
    constructorId: "mclaren",
    name: "Mclaren",
    image: "/assets/icons/mclaren-racing-logo.svg",
    nationality: "British",
  },
  {
    constructorId: "mercedes",
    name: "Mercedes",
    image: "/assets/icons/mercedes-benz-1.svg",
    nationality: "German",
  },
  {
    constructorId: "red_bull",
    name: "Red Bull",
    image: "/assets/icons/red-bull-racing-f1.svg",
    nationality: "Austrian",
  },
  {
    constructorId: "sauber",
    name: "Sauber",
    image: "/assets/icons/stake-F1.jpg",
    nationality: "Swiss",
  },
  {
    constructorId: "williams",
    name: "Williams",
    image: "/assets/icons/williams-racing-1.svg",
    nationality: "British",
  },
  {
    constructorId: "rb",
    name: "Visa Cash App RB",
    image: "/assets/icons/vcarb.jpg",
    nationality: "Italian",
  },
];

export function Teams({ year, setActiveTeam }) {
  const [constructorsData, setConstructorsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ergast.com/api/f1/${year}/constructors.json`
        ).then((res) => res.json());
        const constructors =
          response["MRData"]["ConstructorTable"]["Constructors"];
        if (constructors.length === 0) {
          setConstructorsData(raw_teams_data);
          setActiveTeam(raw_teams_data[0]);
        } else {
          setConstructorsData(Array.from(constructors));
          setActiveTeam(constructors[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [year]);

  return (
    <div className="bg-white">
      {loading ? (
        <div className="flex" style={{ backgroundColor: "#ef233c" }}></div>
      ) : (
        <div className="wrapper">
          <div className="constructors">
            <ul className="my-8 flex flex-row list-none justify-center border-solid border-transparent items-center border-2 whitespace-nowrap">
              {constructorsData.map((teamItem) => (
                <Team
                  team={teamItem}
                  key={teamItem.name}
                  setActiveTeam={setActiveTeam}
                />
              ))}
            </ul>
          </div>
          <div className="constructors">
            <ul className="my-8 flex flex-row list-none justify-center border-solid border-transparent items-center border-2 whitespace-nowrap">
              {constructorsData.map((teamItem) => (
                <Team
                  team={teamItem}
                  key={teamItem.name}
                  setActiveTeam={setActiveTeam}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
