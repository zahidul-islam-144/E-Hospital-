import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    return (
        <div  className="w-60 mx-auto">
            <h1>Please, Register </h1>
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>
               <span className="text-daner"></span><br/>
                <Button variant="primary" type="submit">
                    Registered
                </Button>
            </Form>
        </div>
    );
};

export default Register;