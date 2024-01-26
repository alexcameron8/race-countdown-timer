export function Stats({ driver }) {
  return (
    <div>
      <h3>#{driver["Driver"]["permanentNumber"]}</h3>
      <p>Nationality: {driver["Driver"]["nationality"]}</p>
      <p>Championships: {driver.championships}🏆</p>
      <p>Race Wins: {driver.race_wins}🏁</p>
    </div>
  );
}
