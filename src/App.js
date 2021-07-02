import "./App.css";
import DisplayAll from './component/displayAllData'


function App() {


  return (
    <div className="App">
      <h1>Machine Data</h1>
      <br />
      <h3>Search by Customer name or temprature of sensor</h3>
      <DisplayAll />

    </div>
  );
}

export default App;
