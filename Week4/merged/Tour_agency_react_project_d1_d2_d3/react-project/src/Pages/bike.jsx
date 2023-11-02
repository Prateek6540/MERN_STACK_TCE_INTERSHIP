import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from "react-router-dom";
import './bike.css';
import axios from 'axios';

const Bike = (props) => {
    const history= useNavigate()
    const { _id, name, description, rent, contact, image } = props.bike;
    const deleteHandler = async() => {
        await axios.delete(`http://localhost:5000/bikes/${_id}`)
          .then((res)=>res.data).then(()=>history("/")).then(()=>history("/Bikes"))
          .catch(error => {
            console.error(error);
          });
      };
      


    return (
        <>
            <div className="card m-3">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text h-110 ">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">₹{rent}/day</li>
                </ul>
                <div className="card-body">
                    <Link to={`/bikes/${_id}`} className="card-link">Update</Link>
                    <Link onClick={deleteHandler} className="card-link">Delete</Link>
                </div>
            </div>
        </>
    );
};

export default Bike;
