import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams, useHistory } from "react-router-dom";
import styles from "./Country.module.css";
import Loader from "../loading/Loader";

const CountryDetails = () => {
  const [loading, setLoading] = useState(true);
  const [countryDetail, setCountryDetail] = useState({});
  const { name } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  const {
    country,
    countryInfo,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    critical
  } = countryDetail;

  useEffect(() => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${name}`)
      .then((res) => {
        setCountryDetail(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ArrowBackIcon className={styles.backBtn} onClick={goBack} />
          
        
        <div
          style={{ backgroundImage: `url(${countryInfo.flag})` }}
          className={styles.flag}
        ></div>

        <h3>{country}</h3>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#c02", fontSize: "22px" }}
              value={cases}
              displayType="text"
              thousandSeparator={true}
            />
            <p>Cases</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#c02", fontSize: "22px" }}
              value={todayCases}
              displayType="text"
              thousandSeparator={true}
            />
            <p>New Cases</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#c02", fontSize: "22px" }}
              value={deaths}
              displayType="text"
              thousandSeparator={true}
            />
            <p>Deaths</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#0ccc02", fontSize: "22px" }}
              value={recovered}
              displayType="text"
              thousandSeparator={true}
            />
            <p>Recovered</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#c02", fontSize: "22px" }}
              value={todayDeaths}
              displayType="text"
              thousandSeparator={true}
            />
            <p>New Deaths</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#0ccc02", fontSize: "22px" }}
              value={todayRecovered}
              displayType="text"
              thousandSeparator={true}
            />
            <p>New Recovered</p>
          </div>

          <div className={styles.box}>
            <NumberFormat
              style={{ color: "#c02", fontSize: "22px" }}
              value={critical}
              displayType="text"
              thousandSeparator={true}
            />
            <p>Critical</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
