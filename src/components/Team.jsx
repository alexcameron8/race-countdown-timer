function getTeamImg(team) {
  switch (team) {
    case "alfa":
      return "/public/assets/icons/alfa-romeo.png";
    case "alphatauri":
      return "/public/assets/icons/alphatauri.svg";
    case "alpine":
      return "/public/assets/icons/alpine-f1-team-1.svg";
    case "aston_martin":
      return "/public/assets/icons/aston-martin.svg";
    case "ferrari":
      return "/public/assets/icons/ferrari.ico";
    case "haas":
      return "/public/assets/icons/haas-f1.svg";
    case "mclaren":
      return "/public/assets/icons/mclaren-racing-logo.svg";
    case "mercedes":
      return "/public/assets/icons/mercedes-benz-1.svg";
    case "racing_point":
      return "/public/assets/icons/bwt-racing-point-logo-1.svg";
    case "red_bull":
      return "/public/assets/icons/red-bull-racing-f1.svg";
    case "renault":
      return "/public/assets/icons/renault-7.svg";
    case "stake":
      return "/public/assets/icons/stake-f1.png";
    case "vcarb":
      return "/public/assets/icons/vcarb.jpg";
    case "williams":
      return "/public/assets/icons/williams-racing-1.svg";
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
