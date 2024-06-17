import "./styles.css";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai", "Hyderabad"],
  },
  {
    name: "Pakistan",
    value: "PAK",
    cities: ["Karachi", "Lahore"],
  },
  {
    name: "Bangladesh",
    value: "BAN",
    cities: ["Dhaka", "Chittagong"],
  },
];

export default function App() {
  const [country, setCountry] = useState(countries[0]);
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <select
        value={country.value}
        onChange={(e) => {
          const selectedCountry = countries.find(
            (item) => item.value === e.target.value
          );
          setCountry(selectedCountry);
          setCity(""); // Reset city when country changes
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {country.cities.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
