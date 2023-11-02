import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BikeDetails = () => {
  const [inputs, setInputs] = useState({});
  const history =useNavigate();
  const [error, setError] = useState(null); // Define the error state
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      // await axios.get('http://localhost:5000/bikes/${id}').then((res)=>res.data).then(data)
      try {
        const response = await axios.get(`http://localhost:5000/bikes/${id}`);
        setInputs(response.data.bike);
      } catch (error) {
        setError('Failed to fetch bike details'); // Set error message on fetch failure
      }
    };

    fetchHandler();
  }, [id]);
  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:5000/bikes/${id}`, {
        name: String(inputs.name),
        description: String(inputs.description),
        rent: Number(inputs.rent),
        contact: String(inputs.contact),
        image: String(inputs.image),
      });
      history("/bikes");
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/bikes"))
  };

  const handleChange = (e) => {
    console.log(e);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <div className="bg-light mt-5">
        <div className="container-md">
          <div className="row">
            <h2 className="font-fw-medium fw-bolder mt-4">Update Bike</h2>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="rent" className="form-label">
                    Rent (per day)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rent"
                    name="rent"
                    value={inputs.rent}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact Number (or Email)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={inputs.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={inputs.image}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to={`/bikes/${id}`} className="btn btn-secondary">
          Back to Bike Details
        </Link>
      </div>
      <footer className="text-center text-white mt-5 pb-0 bg-dark">
        <div className="container p-4"></div>
        <div className="text-center p-3 bg-dark">
          © 2023 Copyright:
          <Link to="#" className="text-white">
            Group C5
          </Link>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" async defer></script>
    </>
  );
}

export default BikeDetails;
