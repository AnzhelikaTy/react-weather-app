import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Weather App</p>
        <Weather city="Kyiv" />
      </header>
    </div>
  );
}

export default App;
