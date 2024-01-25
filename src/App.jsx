/* eslint-disable react/prop-types */
import "./App.css";
export default App;
import { DriverProfiles } from "./components/DriverProfiles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <DriverProfiles /> */}
      <Footer />
    </div>
  );
}
