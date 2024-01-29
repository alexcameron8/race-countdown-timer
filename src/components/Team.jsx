function getTeamImg(team) {
  switch (team) {
    case "alfa":
      return "/assets/icons/alfa-romeo.png";
    case "alphatauri":
      return "/assets/icons/alphatauri.svg";
    case "alpine":
      return "/assets/icons/alpine-f1-team-1.svg";
    case "aston_martin":
      return "/assets/icons/aston-martin.svg";
    case "ferrari":
      return "/assets/icons/ferrari.ico";
    case "haas":
      return "/assets/icons/haas-f1.svg";
    case "mclaren":
      return "/assets/icons/mclaren-racing-logo.svg";
    case "mercedes":
      return "/assets/icons/mercedes-benz-1.svg";
    case "racing_point":
      return "/assets/icons/bwt-racing-point-logo-1.svg";
    case "red_bull":
      return "/assets/icons/red-bull-racing-f1.svg";
    case "renault":
      return "/assets/icons/renault-7.svg";
    case "stake":
      return "/assets/icons/stake-f1.png";
    case "vcarb":
      return "/assets/icons/vcarb.jpg";
    case "williams":
      return "/assets/icons/williams-racing-1.svg";
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
