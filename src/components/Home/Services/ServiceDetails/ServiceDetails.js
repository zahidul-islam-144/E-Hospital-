import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [details, setDetails] = useState([])
    useEffect( () => {
        fetch("https://mocki.io/v1/967b7fc3-f9d5-449b-9837-3bd6b3cddc69")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[details])

    const foundService = details.find( details.id === serviceId)
    
    return (
        <div>
            This is details page- {foundService}
        </div>
    );
};

export default ServiceDetails;