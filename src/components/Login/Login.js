import React, { useState, useLocation, useHistory } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_url = location.state?.from || '/home'

//    const handleGoogleLogin = () => {
//     signInUsingGoogle()
//         .then(result => {
//             history.push(redirect_url);
//         })
//     }

    return (

        <div className="w-60 mx-auto">
           <h1>Please, Login </h1>
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
               {/* <span className="text-daner"></span><br/><br/> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={signInUsingGoogle } className="ms-3" variant="primary">
                    Google Sign in
                </Button>
            </Form>
            <Link to="/register">
                <h5 className="mt-3 text-center">Register ?</h5>
            </Link>
        </div>
    );
};

export default Login;