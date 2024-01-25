import { Team } from "./Team";
export const raw_teams_data = [
  {
    name: "Mercedes",
    image: "/src/assets/icons/mercedes-benz-1.svg",
  },
  {
    name: "Mclaren",
    image: "/src/assets/icons/mclaren-racing-logo.svg",
  },
  {
    name: "Ferrari",
    image: "/src/assets/icons/ferrari.ico",
  },
  {
    name: "Haas",
    image: "/src/assets/icons/haas-f1.svg",
  },
  {
    name: "Stake F1",
    image: "src/assets/icons/stake-f1.PNG",
  },
  {
    name: "Racing Bulls",
    image: "/src/assets/icons/alphatauri.svg",
  },
  {
    name: "Red Bull",
    image: "/src/assets/icons/red-bull-racing-f1.svg",
  },
  {
    name: "Aston Martin",
    image: "/src/assets/icons/aston-martin.svg",
  },
  {
    name: "Alpine",
    image: "/src/assets/icons/alpine-f1-team-1.svg",
  },
  {
    name: "Williams",
    image: "/src/assets/icons/williams-racing-1.svg",
  },
];

export function Teams() {
  const teams_data = JSON.parse(JSON.stringify(raw_teams_data));
  return (
    <div className="teams-container">
      <ul className="teams-list">
        {teams_data.map((teamItem) => (
          <Team team={teamItem} key={teamItem.name} />
        ))}
      </ul>
    </div>
  );
}
