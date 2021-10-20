import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleSpecialities.css';

const SingleSpecialities = (props) => {
console.log(props);
const { id, img, doctor_name, speciality_name, mbbs_from } = props.s;

    return (
        <div className="container main">
            <div className="img-block">
                <Image src={img}/>
            </div>

            <div className="content-block">
              <div className="mt-4 mr-10">
                    <h1>{doctor_name}</h1>
                    <h3>{speciality_name}</h3>
                    <h5>MBBS & FCPS from {mbbs_from}</h5>
              </div>
            </div>

            <div className="mt-20 ms-3">
                <Link to="/appointment">
                    <Button>Make Appointment?</Button>
                </Link>
            </div>
        </div>
    );
};

export default SingleSpecialities;