function getTeamImg(team) {
  switch (team) {
    case "alfa":
      return "/src/assets/icons/alfa-romeo.png";
    case "alphatauri":
      return "/src/assets/icons/alphatauri.svg";
    case "alpine":
      return "/src/assets/icons/alpine-f1-team-1.svg";
    case "aston_martin":
      return "/src/assets/icons/aston-martin.svg";
    case "ferrari":
      return "/src/assets/icons/ferrari.ico";
    case "haas":
      return "/src/assets/icons/haas-f1.svg";
    case "mclaren":
      return "/src/assets/icons/mclaren-racing-logo.svg";
    case "mercedes":
      return "/src/assets/icons/mercedes-benz-1.svg";
    case "racing_point":
      return "/src/assets/icons/bwt-racing-point-logo-1.svg";
    case "red_bull":
      return "/src/assets/icons/red-bull-racing-f1.svg";
    case "renault":
      return "/src/assets/icons/renault-7.svg";
    case "stake":
      return "/src/assets/icons/stake-f1.png";
    case "vcarb":
      return "/src/assets/icons/vcarb.jpg";
    case "williams":
      return "/src/assets/icons/williams-racing-1.svg";
    default:
      return "";
  }
}

export function Team({ team, setActiveTeam }) {
  const team_img = getTeamImg(team.constructorId);

  return (
    <li className="team-li" onClick={() => setActiveTeam(team)}>
      <img className="teamLogo" src={team_img} alt={team.name} />
      <p>{team.name}</p>
    </li>
  );
}
