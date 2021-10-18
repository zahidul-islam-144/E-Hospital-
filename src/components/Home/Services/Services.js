import React, { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
import './Services.css'
;
const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch("https://mocki.io/v1/48cd310c-b0c1-4da4-ae97-e8b58ef18d60")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div id="services">
            <h1 className="text-center mt-5">Our <span className="text-blue-800">Services</span></h1>
            <div className="d-flex justify-items-center justify-around flex-wrap bg-blue-600 rounded p-5 mt-5">

            </div>
        </div>
    );
};

export default Services;