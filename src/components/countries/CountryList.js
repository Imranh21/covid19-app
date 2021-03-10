import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./CountryList.module.css";
import CountryCard from "./CountryCard";

const URL = "https://disease.sh/v3/covid-19/countries";

const CountryList = () => {
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getCountries = () => {
      axios.get(URL).then(async (res) => {
        const responseData = await res.data;
        setAllData(responseData);
      });
    };

    getCountries();
  }, []);

  return (
    <div className={styles.countyListSection}>
      <div className={styles.countryContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              placeholder="Search Country"
              className={styles.inputField}
            />
            <SearchIcon />
          </div>
        </div>

        <div className={styles.countryList}>
          {allData
            .filter((value) => {
              if (searchField === "") {
                return value;
              } else if (
                value.country
                  .toLowerCase()
                  .includes(searchField.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((data) => {
              return <CountryCard key={data.country} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
