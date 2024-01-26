export function DriverImg({ driver }) {
  function getDriverImg(driverId) {
    switch (driverId) {
      case "albon":
        return "/src/assets/headshots/albon.png";
      case "alonso":
        return "/src/assets/headshots/alonso.png";
      case "bottas":
        return "/src/assets/headshots/bottas.png";
      case "gasly":
        return "/src/assets/headshots/gasly.png";
      case "zhou":
        return "/src/assets/headshots/zhou.png";
      case "hamilton":
        return "/src/assets/headshots/hamilton.png";
      case "hulkenberg":
        return "/src/assets/headshots/hulkenberg.png";
      case "kevin_magnussen":
        return "/src/assets/headshots/kevin_magnussen.png";
      case "leclerc":
        return "/src/assets/headshots/leclerc.jpg";
      case "norris":
        return "/src/assets/headshots/norris.png";
      case "ocon":
        return "/src/assets/headshots/ocon.png";
      case "perez":
        return "/src/assets/headshots/perez.png";
      case "piastri":
        return "/src/assets/headshots/piastri.png";
      case "ricciardo":
        return "/src/assets/headshots/ricciardo.png";
      case "russell":
        return "/src/assets/headshots/russell.png";
      case "sainz":
        return "/src/assets/headshots/sainz.jpg";
      case "sargeant":
        return "/src/assets/headshots/sargeant.png";
      case "stroll":
        return "/src/assets/headshots/stroll.png";
      case "tsunoda":
        return "/src/assets/headshots/tsunoda.png";
      case "max_verstappen":
        return "/src/assets/headshots/max_verstappen.png";
      default:
        return "/src/assets/headshots/unknown.png";
    }
  }
  return (
    <img
      className="avatar"
      src={getDriverImg(driver["Driver"]["driverId"])}
      alt={driver["Driver"]["driverId"]}
    />
  );
}
