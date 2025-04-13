import WeatherMap from "./components/WeatherMap";
import styles from "./App.module.css";

function App() {
  // replace with your real OpenWeatherMap API key
  const OPENWEATHER_API_KEY = "489c3d104ae5fa52cce724e52a84621a";

  return (
    <div className={styles.container}>
      <div className="h-fit rounded-4xl">
        <WeatherMap apiKey={OPENWEATHER_API_KEY} />
      </div>
    </div>
  );
}

export default App;
