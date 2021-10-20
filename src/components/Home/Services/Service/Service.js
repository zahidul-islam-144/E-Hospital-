import React from 'react';
import './Service.css';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
 
    const { id, service_name, img } = props.service;
    return (
        <div>
    
            <Card>
                <Image  src={img} className="hover" style={{ opacity: ".9", width:"100%", height:"100%"}} />
                    {/* <Card.ImgOverlay>
                        <Card.Title className="text-black text-center mt-5 hover">
                            {service_name}
                        </Card.Title>
                    </Card.ImgOverlay> */}
                   <h5 className="text-center mt-1">{service_name}</h5>
            </Card>
            <Link to={`/services/${id}`}  style={{cursor:"pointer"}}>
                         Details
            </Link>
        </div>
    );
};

export default Service;