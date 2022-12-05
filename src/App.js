import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather city="Kyiv" />
      </header>
      <footer>
        <a href="https://github.com/AnzhelikaTy/react-weather-app.git">
          Open-source code
        </a>{" "}
        by Anzhelika Susemcik
      </footer>
    </div>
  );
}

export default App;
