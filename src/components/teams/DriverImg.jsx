export function DriverImg({ driver }) {
  function getDriverImg(driverId) {
    switch (driverId) {
      case "albon":
        return "/assets/headshots/albon.png";
      case "alonso":
        return "/assets/headshots/alonso.png";
      case "bottas":
        return "/assets/headshots/bottas.png";
      case "gasly":
        return "/assets/headshots/gasly.png";
      case "zhou":
        return "/assets/headshots/zhou.png";
      case "hamilton":
        return "/assets/headshots/hamilton.png";
      case "hulkenberg":
        return "/assets/headshots/hulkenberg.png";
      case "kevin_magnussen":
        return "/assets/headshots/kevin_magnussen.png";
      case "leclerc":
        return "/assets/headshots/leclerc.jpg";
      case "norris":
        return "/assets/headshots/norris.png";
      case "ocon":
        return "/assets/headshots/ocon.png";
      case "perez":
        return "/assets/headshots/perez.png";
      case "piastri":
        return "/assets/headshots/piastri.png";
      case "ricciardo":
        return "/assets/headshots/ricciardo.png";
      case "russell":
        return "/assets/headshots/russell.png";
      case "sainz":
        return "/assets/headshots/sainz.jpg";
      case "sargeant":
        return "/assets/headshots/sargeant.png";
      case "stroll":
        return "/assets/headshots/stroll.png";
      case "tsunoda":
        return "/assets/headshots/tsunoda.png";
      case "max_verstappen":
        return "/assets/headshots/max_verstappen.png";
      default:
        return "/assets/headshots/unknown.png";
    }
  }
  return (
    <img
      className="rounded-full w-4/5 justify-center"
      src={getDriverImg(driver["Driver"]["driverId"])}
      alt={driver["Driver"]["driverId"]}
    />
  );
}
