export function Team({ team }) {
  return (
    <li className="team-li">
      <img className="teamLogo" src={team.image} alt={team.name} />
      <p>{team.name}</p>
    </li>
  );
}
