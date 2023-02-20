import { useEffect, useState } from "react";
import "./App.css";
import Icons from "./components/Icons";

function App() {
  const [search, setSearch] = useState("Bogota");
  const [icon, setIcon] = useState("");
  const [value, setValue] = useState({
    main:{
      temp:0
    }
  });

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=959056eb6300661baa9aaeb708737159`;

  const getdata = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setValue(data)
        setIcon(data.weather[0].main)
      });
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
      event.target.style.width = event.target.value.length-1 * 25 + "px";
    }
  };

  const ajustar = (event) => {
    event.target.style.width = "100px";
    if(event.target.value.length >= 1){
      event.target.style.width = event.target.value.length * 20 + "px";
      }
  }

  useEffect(() => {
    getdata();
  }, [search]); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <span className="antes">Ahora mismo en</span>
      <input className="input" onKeyDown={handleSearch} onKeyUp={ajustar} placeholder="Ciudad" spellcheck="false"/>
      <span className="despues">el clima esta:</span>
      <p></p>
      <img className="img" src={Icons(icon)} alt="img"/>
      <b className="temp">{value.main.temp}</b>
      <b className="tempmm">80 / 120</b>
    </div>
  );
}

export default App;
