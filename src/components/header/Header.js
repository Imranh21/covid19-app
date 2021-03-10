import { useState, useEffect } from "react";
import axios from "axios";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "./Header.module.css";
import RedMarker from "./RedMarker";

export default function Header() {
  const [allData, setAllData] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries/").then((res) => {
      setAllData(res.data);
    });
  }, []);

  return (
    <div className={styles.header}>
      <ReactMapGL
        style={{ margin: "0px auto" }}
        {...viewport}
        mapStyle="mapbox://styles/imranh21/ckki2o4ty0h3t17phifue5of5"
        mapboxApiAccessToken="pk.eyJ1IjoiaW1yYW5oMjEiLCJhIjoiY2trY2xpdmpxMGZydTJxcXNrNTBrdm5ybSJ9.S6KhfRpftPchrqb1C4c98w"
        onViewportChange={setViewport}
      >
        {allData.map((data) => {
          // const lat = data.countyInfo.lat
          // const long = data.countryInfo.long
          return (
            <Marker
              latitude={data.countryInfo.lat}
              longitude={data.countryInfo.long}
            >
              <RedMarker />
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
}
