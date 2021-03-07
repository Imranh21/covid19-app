import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NumberFormat from "react-number-format";
import styles from "./CountryList.module.css";

const CountryCard = ({ data }) => {
  const { country, cases, deaths, recovered, countryInfo } = data;

  const { flag } = countryInfo;
  return (
    <NavLink className={styles.navlink} to={`/country/${country}`}>
      <div className={styles.card}>
        <div className={styles.info}>
          <h4>{country}</h4>
          <div className={styles.data}>
            <div className={styles.cases}>
              <p>Cases</p>
              <NumberFormat
                style={{ color: "#c02", fontSize: "18px" }}
                value={cases}
                displayType="text"
                thousandSeparator={true}
              />
            </div>
            <div className={styles.cases}>
              <p>Deaths</p>
              <NumberFormat
                style={{ color: "#c02", fontSize: "18px" }}
                value={deaths}
                displayType="text"
                thousandSeparator={true}
              />
            </div>
            <div className={styles.cases}>
              <p>Recovered</p>
              <NumberFormat
                style={{ color: "#0ccc02", fontSize: "18px" }}
                value={recovered}
                displayType="text"
                thousandSeparator={true}
              />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryCard;
