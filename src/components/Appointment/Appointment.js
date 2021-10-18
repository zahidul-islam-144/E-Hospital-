import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appointment.css';

const Appointment = () => {
    return (
        <div id="appointment" className="container d-flex justify-items-center justify-around gap-2 flex-wrap bg-blue-600 rounded mt-5 p-4">
            <div className="p-2">
                <Link to="/specialities">
                    <Button variant="light" size="lg">Find Doctors?</Button>
                </Link>
            </div>

            <div className="p-2">
                <Link to="/appointment-form"> 
                    <Button variant="light" size="lg">Make an appointment?</Button>
                </Link>
            </div>
        </div>
    );
};

export default Appointment;