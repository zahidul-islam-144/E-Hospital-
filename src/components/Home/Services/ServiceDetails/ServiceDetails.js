import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    // data loading
    const [details, setDetails] = useState([])
    useEffect( () => {
        fetch("https://mocki.io/v1/a9b3d72e-39fe-4c3c-9b11-8c382655f041")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
   
    // data showing
    const [singleService, setSingleService] = useState([])
    useEffect( () => {
        const foundService = details.find( d => d.id == serviceId)
        setSingleService(foundService);
        console.log(foundService);
    },[details])
    
    return (
        <div>
          <h1 className="text-center mt-5 mb-5">{singleService?.title}</h1>

            <div className="d-grid grid-cols-2">
                <div>
                    <Image className="p-5 me-5" src={singleService?.img}/>
                </div>
                <div className="ms-5 me-5">
                    {singleService?.description}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;