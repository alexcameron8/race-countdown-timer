function getDriverRaceWins(driverWins) {
  return driverWins["total"];
}
function getDriverChampionships(driverChampionships) {
  // console.log(driverChampionships);
  return driverChampionships["total"];
}

export function Stats({ driver, driverWins, driverChampionships }) {
  return (
    <div>
      <h3>#{driver["Driver"]["permanentNumber"]}</h3>
      <p>Nationality: {driver["Driver"]["nationality"]}</p>
      <p>Race Wins: {getDriverRaceWins(driverWins)}🏁</p>
      <p>Championships: {getDriverChampionships(driverChampionships)}🏆</p>
    </div>
  );
}
