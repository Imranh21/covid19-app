import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import styles from "./Global.module.css";
import Loader from "../loading/Loader";

const URL = "https://disease.sh/v3/covid-19/all";

const Global = () => {
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = () => {
      axios
        .get(URL)
        .then(async (res) => {
          const responeData = await res.data;
          setGlobalData(responeData);
          setLoading(false);
        })
        .catch((err) => {
          console.log("There was an error while fetching data");
          setError(err);
        });
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.globalSection}>
      <div className={styles.globalContainer}>
        <div className={styles.globalData}>
          <div className={styles.box}>
            <NumberFormat
              style={{ color: "red" }}
              className={styles.number}
              value={globalData.affectedCountries}
              displayType="text"
            >
              {globalData.affectedCountries}
            </NumberFormat>
            <p>Affected Countries</p>
          </div>
          <div className={styles.box}>
            <NumberFormat
              style={{ color: "red" }}
              className={styles.number}
              value={globalData.cases}
              displayType="text"
              thousandSeparator={true}
            >
              {globalData.cases}
            </NumberFormat>
            <p>Total Cases</p>
          </div>
          <div className={styles.box}>
            <NumberFormat
              style={{ color: "green" }}
              className={styles.number}
              value={globalData.recovered}
              displayType="text"
              thousandSeparator={true}
            >
              {globalData.recovered}
            </NumberFormat>
            <p>Total Recovered</p>
          </div>
          <div className={styles.box}>
            <NumberFormat
              style={{ color: "red" }}
              className={styles.number}
              value={globalData.deaths}
              displayType="text"
              thousandSeparator={true}
            >
              {globalData.deaths}
            </NumberFormat>
            <p>Total Deaths</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
