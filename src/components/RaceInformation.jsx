function getEmojiFlag(country) {
  switch (country) {
    case "Abu Dhabi Grand Prix":
      return "🇦🇪";
    case "Australian Grand Prix":
      return "🇦🇺";
    case "Austrian Grand Prix":
      return "🇦🇹";
    case "Azerbaijan Grand Prix":
      return "🇦🇿";
    case "Bahrain Grand Prix":
      return "🇧🇭";
    case "Belgian Grand Prix":
      return "🇧🇪";
    case "British Grand Prix":
      return "🇬🇧";
    case "Canadian Grand Prix":
      return "🇨🇦";
    case "Chinese Grand Prix":
      return "🇨🇳";
    case "Dutch Grand Prix":
      return "🇳🇱";
    case "Emilia Romagna Grand Prix":
      return "🇮🇹";
    case "Hungarian Grand Prix":
      return "🇭🇺";
    case "Italian Grand Prix":
      return "🇮🇹";
    case "Japanese Grand Prix":
      return "🇯🇵";
    case "Las Vegas Grand Prix":
      return "🇺🇸";
    case "Mexico City Grand Prix":
      return "🇲🇽";
    case "Miami Grand Prix":
      return "🇺🇸";
    case "Monaco Grand Prix":
      return "🇲🇨";
    case "Qatar Grand Prix":
      return "🇶🇦";
    case "São Paulo Grand Prix":
      return "🇧🇷";
    case "Saudi Arabian Grand Prix":
      return "🇸🇦";
    case "Singapore Grand Prix":
      return "🇸🇬";
    case "Spanish Grand Prix":
      return "🇪🇸";
    case "United States Grand Prix":
      return "🇺🇸";
    default:
      return "Unknown Flag";
  }
}

function getCircuitPNG(country) {
  switch (country) {
    case "Abu Dhabi Grand Prix":
      return "/src/assets/circuits/abudhabi.avif";
    case "Australian Grand Prix":
      return "/src/assets/circuits/australia.avif";
    case "Austrian Grand Prix":
      return "/src/assets/circuits/austria.avif";
    case "Azerbaijan Grand Prix":
      return "/src/assets/circuits/azerbaijan.avif";
    case "Bahrain Grand Prix":
      return "/src/assets/circuits/bahrain.avif";
    case "Belgian Grand Prix":
      return "/src/assets/circuits/belgium.avif";
    case "British Grand Prix":
      return "/src/assets/circuits/great-britain.avif";
    case "Canadian Grand Prix":
      return "/src/assets/circuits/canada.avif";
    case "Chinese Grand Prix":
      return "/src/assets/circuits/china.avif";
    case "Dutch Grand Prix":
      return "/src/assets/circuits/netherlands.png";
    case "Emilia Romagna Grand Prix":
      return "/src/assets/circuits/italy_imola.png";
    case "Hungarian Grand Prix":
      return "/src/assets/circuits/hungary.avif";
    case "Italian Grand Prix":
      return "/src/assets/circuits/monza.avif";
    case "Japanese Grand Prix":
      return "/src/assets/circuits/japan.avif";
    case "Las Vegas Grand Prix":
      return "/src/assets/circuits/las_vegas.avif";
    case "Mexico City Grand Prix":
      return "/src/assets/circuits/mexico.avif";
    case "Miami Grand Prix":
      return "/src/assets/circuits/miami.avif";
    case "Monaco Grand Prix":
      return "/src/assets/circuits/monaco.png";
    case "Qatar Grand Prix":
      return "/src/assets/circuits/qatar.avif";
    case "São Paulo Grand Prix":
      return "/src/assets/circuits/brazil.avif";
    case "Saudi Arabian Grand Prix":
      return "/src/assets/circuits/Saudi_Arabia.png";
    case "Singapore Grand Prix":
      return "/src/assets/circuits/singapore.avif";
    case "Spanish Grand Prix":
      return "/src/assets/circuits/spain.avif";
    case "United States Grand Prix":
      return "/src/assets/circuits/austin.avif";
    default:
      return "Unknown Flag";
  }
}
export function RaceInformation({ selectedRace }) {
  console.log(selectedRace);
  return (
    <div className="race-information-container">
      <div className="race-information">
        <div className="race-line-container">
          <p> Location: </p>
          <h1>
            {selectedRace["Circuit"]["Location"]["country"] +
              ", " +
              selectedRace["Circuit"]["Location"]["locality"]}
          </h1>
          <div className="country-icon">
            {getEmojiFlag(selectedRace["raceName"])}
          </div>
        </div>
        <div className="race-line-container">
          <p> Circuit: </p>
          <h3>{selectedRace["Circuit"]["circuitName"]}</h3>
        </div>
        <div className="race-line-container">
          <p> Date: </p>
          <h4>{selectedRace["date"]}</h4>
        </div>
        <div className="race-line-container">
          <p> Race: #{selectedRace["round"]}/24</p>
        </div>
      </div>
      <div className="circuit-container">
        <img
          className="circuit-image"
          src={getCircuitPNG(selectedRace["raceName"])}
          alt={selectedRace["round"]}
        />
      </div>
    </div>
  );
}
