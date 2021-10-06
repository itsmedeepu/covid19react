import React, { useEffect, useState } from "react";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Cards() {
  const [Data, setCases] = useState([]);

  useEffect(() => {
    try {
      fetch("https://data.covid19india.org/data.json")
        .then((resp) => resp.json())
        // .then((resp) => console.log(resp));
        .then((resp) => setCases(resp.statewise[0]));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const settings = {
    dots: true,
    arrow: false,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid col-lg-12">
      <h2 className="text-center">COVID 19 DASHBOARD</h2>
      <div className="container mt-3">
        <div className="row row-card  col-12">
          <div className="cards active col-lg-2 col-sm-2  col-md-2  mb-3 shadow-lg ">
            <h5>Active Cases</h5>
            <p id="active">
              {Data.active ? Data.active : <CircularProgress />}
            </p>
          </div>
          <div className="cards conf col-lg-2 col-sm-2 col-md-2 mb-3 shadow-lg">
            <h5>Confirmed Cases</h5>
            <p id="confirmed ">
              {Data.confirmed ? Data.confirmed : <CircularProgress />}
            </p>
          </div>
          <div className="cards reco col-lg-2 col-sm-2 col-md-2  mb-3  shadow-lg">
            <h5>Recovered Cases</h5>
            <p id="recovered">
              {Data.recovered ? Data.recovered : <CircularProgress />}
            </p>
          </div>
          <div className="cards death col-lg-2 col-md-2 mb-3 shadow-lg">
            <h5>Death Cases</h5>
            <p id="death">{Data.deaths ? Data.deaths : <CircularProgress />}</p>
          </div>
          <div className="slick col-12 p-4">
            <Slider className="slickslider col-sm-12" {...settings}>
              <div className="cards active">
                <h5>Active Cases</h5>
                <p id="active">
                  {Data.active ? Data.active : <CircularProgress />}
                </p>
              </div>
              <div className="cards conf">
                <h5>Confirmed Cases</h5>
                <p id="confirmed ">
                  {Data.confirmed ? Data.confirmed : <CircularProgress />}
                </p>
              </div>
              <div className="cards reco">
                <h5>Recovered Cases</h5>
                <p id="recovered">
                  {Data.recovered ? Data.recovered : <CircularProgress />}
                </p>
              </div>
              <div className="cards death">
                <h5>Death Cases</h5>
                <p id="death">
                  {Data.deaths ? Data.deaths : <CircularProgress />}
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
