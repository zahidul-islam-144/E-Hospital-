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
                    <Card.ImgOverlay>
                        <Card.Title className="text-black text-center mt-2 hover">
                            {service_name}
                        </Card.Title>
                    </Card.ImgOverlay>
            </Card>
            <Link to={`/services/${id}`}>
                        <Button style={{cursor:"pointer"}}>Details</Button>
            </Link>
        </div>
    );
};

export default Service;