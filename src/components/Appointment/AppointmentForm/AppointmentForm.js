import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const AppointmentForm = () => {
    return (
        <div>
            <h1 className="mt-5 mb-5 text-center">Appointment Form</h1>

            <Form className="container border-1 p-2 bg-light mb-5">

                <Row className="mb-3"> 
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="write name"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Patient Contact Number</Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            placeholder="enter contact number"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Patient Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                     <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="write name"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Speciality</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Select</option>
                            <option>Cardilogy</option>
                            <option>Nephrology</option>
                            <option>Neurology</option>
                            <option>Urology</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select visiting time</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Select</option>
                            <option>Sun-Tue  6:00-9:00</option>
                            <option>Sat-Mon  5:00-8:00</option>
                            <option>Sun, Mon  7:00-10:30:00</option>
                            <option>Sun-Tue  5:30-8:00</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AppointmentForm;