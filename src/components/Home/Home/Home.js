import './Home.css';
import React from 'react';
import Banner from '../Banner/Banner';
import Appointment from '../../Appointment/Appointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Appointment></Appointment>
            <Services></Services>
        </div>
    );
};

export default Home;