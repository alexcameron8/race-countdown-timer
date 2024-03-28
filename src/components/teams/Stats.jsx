function getDriverRaceWins(driverWins) {
  return driverWins["total"];
}
function getDriverChampionships(driverChampionships) {
  // console.log(driverChampionships);
  return driverChampionships["total"];
}

function getNationality(driverNationality) {
  switch (driverNationality) {
    case "Abu Dhabi":
      return "🇦🇪";
    case "American":
      return "🇺🇸";
    case "Australian":
      return "🇦🇺";
    case "Austrian":
      return "🇦🇹";
    case "Azerbaijan":
      return "🇦🇿";
    case "Bahrain":
      return "🇧🇭";
    case "Belgian":
      return "🇧🇪";
    case "British":
      return "🇬🇧";
    case "Canadian":
      return "🇨🇦";
    case "Chinese":
      return "🇨🇳";
    case "Danish":
      return "🇩🇰";
    case "Dutch":
      return "🇳🇱";
    case "Finnish":
      return "🇫🇮";
    case "French":
      return "🇫🇷";
    case "German":
      return "🇩🇪";
    case "Hungarian":
      return "🇭🇺";
    case "Italian":
      return "🇮🇹";
    case "Japanese":
      return "🇯🇵";
    case "Mexican":
      return "🇲🇽";
    case "Monegasque":
      return "🇲🇨";
    case "Qatar":
      return "🇶🇦";
    case "Brazilian":
      return "🇧🇷";
    case "Thai":
      return "🇹🇭";
    case "Saudi Arabian":
      return "🇸🇦";
    case "Singapore":
      return "🇸🇬";
    case "Spanish":
      return "🇪🇸";
    default:
      return "";
  }
}

export function Stats({ driver, driverWins, driverChampionships }) {
  return (
    <>
      <h3 className="text-3xl font-bold my-2">
        #{driver["Driver"]["permanentNumber"]}
      </h3>
      <div className="driver-stats">
        <p className="my-1">
          Nationality: {driver["Driver"]["nationality"]}{" "}
          {getNationality(driver["Driver"]["nationality"])}
        </p>
        <p className="my-1">Race Wins: {getDriverRaceWins(driverWins)}🏁</p>
        <p className="my-1">
          Championships: {getDriverChampionships(driverChampionships)}🏆
        </p>
      </div>
    </>
  );
}
