import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import Bike from "./bike";
import axios from 'axios';

const URL = "http://localhost:5000/bikes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Bikes() {
  const [bikes, setBikes] = useState();

  useEffect(() => {
    fetchHandler().then(data => setBikes(data.bikes));
  }, []);

  console.log(bikes);

  return (
    <>
      <div className="bg-light mt-5">
        <div className="container md-2">
          <div className="row">
            <h2 className="font-fw-medium fw-bolder mt-5">Bikes for Rent</h2>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/bikes" className="nav-link active">
                      All Bikes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Addbike" className="nav-link">
                      Add Bike
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row">
            {bikes && bikes.map((bike, i) => (
              <div key={i} className="col-md-4 mb-3">
                <Bike bike={bike} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-center text-white mb-0 pb-0  bg-dark">
        <div className="container p-4"></div>
        <div className="text-center p-3 bg-dark">
          © 2023 Copyright:
          <Link to="#" className="text-white">
            Group C5
          </Link>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        async
        defer
      ></script>
    </>
  );
}

export default Bikes;
