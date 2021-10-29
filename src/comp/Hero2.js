import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import MaterialTable from "material-table";
function Hero2() {
  const [vacci, setvacci] = useState([]);
  const [Data, setDistrict] = useState([]);

  const columns = [
    {
      title: "State",
      field: "state",
    },
    {
      title: "Active Cases",
      field: "active",
    },
    {
      title: "Confirmed Cases",
      field: "confirmed",
    },
    {
      title: "Deaths",
      field: "deaths",
    },

    {
      title: "Delta Confirmed",
      field: "deltaconfirmed",
    },
    {
      title: "Delta Recovered",
      field: "deltarecovered",
    },
    {
      title: "Delta Deaths",
      field: "deltadeaths",
    },
    {
      title: "Last Updated",
      field: "lastupdatedtime",
    },
  ];

  useEffect(() => {
    try {
      fetch("https://data.covid19india.org/data.json")
        .then((resp) => resp.json())
        // .then((resp) => console.log(resp));
        .then((resp) => setDistrict(resp.statewise));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://data.covid19india.org/v4/min/data.min.json")
        .then((resp) => resp.json())
        // .then((resp) => console.log(resp));
        .then((resp) => setvacci(resp.KA.total));
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log(vacci);
  const data = {
    labels: ["First Dose", "Second Dose"],
    datasets: [
      {
        label: "No of Vaccinations",
        data: [vacci.vaccinated1, vacci.vaccinated2],
        fill: true,
        backgroundColor: ["#4A00E0", "#24FE41"],
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "TOTAL KARNATAKA VACCINATION REPORTS",
        fontSize: "60px",
      },
    },
    animation: {
      duration: 3000,
      easing: "easeInBounce",
      loop: false,
    },
  };
  return (
    <div className="container col-12 mt-3 shadow-lg">
      <div className="row col-12">
        <div
          className="col-lg-6 col-sm-12 col-md-6"
          style={{
            height: "400px",
          }}
        >
          <Bar options={options} data={data} />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <MaterialTable
            title="STATE WISE DATA"
            data={Data}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
