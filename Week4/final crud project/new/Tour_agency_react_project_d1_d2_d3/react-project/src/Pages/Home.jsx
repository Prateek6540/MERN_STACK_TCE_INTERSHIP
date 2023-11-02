import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <>
      <div className="bg-light container-fluid mt-5">
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/19023234/GOKARNA-FEATURE-compressed.jpg"
                className="d-block w-100 img-small" // Added custom class for smaller images
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>EXPLORE PLACE</h5>
                <p>Discover the places to visit in and around the area.</p>
                <Link to="./Places">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://dxtu9lzukmhux.cloudfront.net/deal-images/November2020/fp5JixKCDGB2pHUepdBx.jpg"
                className="d-block w-100 img-small" // Added custom class for smaller images
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>BOOK YOUR STAY</h5>
                <p>
                  Discover the perfect accommodation in the coastal paradise of Gokarna. Whether you prefer the comfort of a cozy room or the adventure of a beachfront tent, we have you covered.
                </p>
                <Link to="./Soon">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/19023234/GOKARNA-FEATURE-compressed.jpg"
                className="d-block w-100 img-small" // Added custom class for smaller images
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>RENT A BIKE</h5>
                <p>Renting a bike is one of the cheapest and best ways to explore Gokarna.</p>
                <Link to="./Bikes">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container text-center mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card mt-5 mb-5 bg-dark card_css">
                <div className="card-body text-light">
                  <h5 className="card-title">ABOUT US</h5>
                  <p className="card-text">
                    Welcome to Explore Gokarna, your ultimate guide to uncovering the hidden gems of this beautiful coastal town. We are here to make your journey through Gokarna a memorable and hassle-free experience.
                  </p>
                  <Link to="./about">
                    <button type="button" className="btn btn-secondary">
                      MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card mt-5 mb-5 bg-dark card_css">
                <div className="card-body text-light">
                  <h5 className="card-title">OUR PACKAGES</h5>
                  <p className="card-text">
                    Simplify your travel plans with our all-in-one package. One simple card, endless possibilities. Explore Gokarna your way.
                  </p>
                  <Link to="./Package">
                    <button type="button" className="btn btn-secondary">
                      MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-white bg-dark">
          <div className="container p-4"></div>
          <div className="text-center p-3 bg-dark">
            © 2023 Copyright:
            <Link className="text-white" to="#">
              Group C5
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;


