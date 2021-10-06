import React, { useEffect, useState } from "react";
import "./style.css";
import { Doughnut } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";

function Hero() {
  const [list, setData] = useState([]);
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    try {
      fetch("https://data.covid19india.org/data.json")
        .then((resp) => resp.json())
        // .then((resp) => console.log(resp));
        .then((resp) => setDistrict(resp.statewise[16]));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://data.covid19india.org/data.json")
        .then((resp) => resp.json())
        // .then((resp) => console.log(resp));
        .then((resp) => setData(resp.statewise[0]));
    } catch (e) {
      console.log(e);
    }
  }, []);
  const data = {
    labels: ["Active Cases", "Confirmed Cases", "Recovered Cases", "Deaths"],
    datasets: [
      {
        label: "Vaccination Reports",
        data: [list.active, list.confirmed, list.recovered, list.deaths],
        backgroundColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(102,255,153)",
          "rgba(255,0,0)",
        ],
        borderColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(102,255,153)",
          "rgba(255,0,0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "TOTAL INDIA REPORT",
        fontSize: "60px",
      },
    },
    animation: {
      duration: 3000,
      easing: "bounce",
      loop: false,
    },
  };
  //**karnataka district  */
  const District = {
    labels: ["Active Cases", "Confirmed Cases", "Recovered Cases", "Deaths"],
    datasets: [
      {
        label: "Vaccination Reports",
        data: [
          district.active,
          district.confirmed,
          district.recovered,
          district.deaths,
        ],
        backgroundColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(102,255,153)",
          "rgba(255,0,0)",
        ],
        borderColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(102,255,153)",
          "rgba(255,0,0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "TOTAL KARNATAKA REPORTS",
        fontSize: "60px",
      },
    },
    animation: {
      duration: 3000,
      easing: "bounce",
      loop: false,
    },
  };

  return (
    <div className="container mt-3 col-sm-12">
      <div className="row ms-2 col-12">
        <div className="col-lg-6  shadow-lg mb-3">
          <Doughnut
            className="chart"
            options={options}
            height={400}
            data={data ? data : <CircularProgress />}
          />
        </div>
        <div className="col-lg-6 shadow-lg mb-3">
          <Doughnut
            className="chart"
            options={options2}
            height={400}
            data={District ? District : <CircularProgress />}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
