import React, { useEffect, useState } from 'react';
import SingleSpecialities from './SingleSpecialities/SingleSpecialities';
import './Specialities.css';


const Specialities = () => {

    const [specialities, setSpecialities] = useState([])

    useEffect( () => {
        fetch("https://mocki.io/v1/8ba74376-6984-4a6c-ad6c-f8a61451d102")
        .then(res => res.json())
        .then(data => setSpecialities(data))
    },[])
    
    return (
        <div>
            {
               specialities.map( s =><SingleSpecialities
                s = {s}
                key = {s.id}
                
                />)
            }
        </div>
    );
};

export default Specialities;