import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const {signup } = useAuth();

    //set input data in states
    const [email, setEamial] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // get input email field
    const handleEmail = event => {
     setEamial(event.target.value);
    }

    //get input password field
    const handlePassword = event => {
      setPassword(event.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        
        signup(email, password);

    }

    return (
        <div  className="max-w-sm  min-h-full mx-auto border-1 p-2 m-5 shadow-md">

            <h1 className="text-center text-blue-500">Please, Register </h1>

           <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onBlur={handleEmail} 
                        type="email" 
                        placeholder="Enter email" 
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onBlur={handlePassword} 
                        type="password" 
                        placeholder="Password"
                        required 
                    />
                </Form.Group>

                {/* warning messages */}
                <span className="mt-3"><h6>{error}</h6></span>
                
                {/* register button */}
                <Button className="mb-5 d-block mx-auto" variant="primary" type="submit">
                    Registered
                </Button>
               
            </Form>
        </div>
    );
};

export default Register;