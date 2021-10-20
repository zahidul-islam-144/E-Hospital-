import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect( () => {
        fetch("https://mocki.io/v1/967b7fc3-f9d5-449b-9837-3bd6b3cddc69")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div id="services">
            <h1 className="text-center mt-5 mb-4">Our <span className="text-blue-800">Services</span></h1>
            
                <div className="grid grid-cols-4 gap-4 container">
                    {
                        services.map( service =><Service
                            service = {service}
                            key = {service.id}
                        />)
                        
                    }
                </div>

        </div>
    );
};

export default Services;