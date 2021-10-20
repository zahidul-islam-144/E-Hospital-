// import React, { useState, useLocation, useHistory } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signInUsingGoogle } = useAuth();
    const { login } = useAuth();

    // const location = useLocation();
    // const history = useHistory();
    // const redirect_url = location.state?.from || '/home'

//    const handleGoogleLogin = () => {
//     signInUsingGoogle()
//         .then(result => {
//             history.push(redirect_url);
//         })
//     }

    // take input from email field
    const handleEmail = event => {
        setEmail(event.target.value);
    }

   //take input from password field
   const handlePassword = event => {
        setPassword(event.target.value);
   }
    
   // sumitting user login form
   const handleUserLogin = (event) => {
        event.preventDefault();
        try{
            login(email, password)
            // history.push("/")
        }catch{
            setError("Password or Email is correct !");
        }


    }

    return (

        <div className="max-w-sm  mx-auto border-1 p-2 m-5 shadow-md min-h-full">
           <h1 className="text-center text-blue-500">Please, Login </h1>
           <Form>
           {error && <Alert variant="danger">{error}</Alert>}

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
                    <spnan>{error}</spnan>
                    <Form.Control 
                        onBlur={handlePassword}
                        type="password" 
                        placeholder="Password" 
                        required 
                    />
                </Form.Group>

              {/* login button */}
                <Button onClick={handleUserLogin} variant="primary" type="submit">
                    Login
                </Button>
                {/* google login */}
                <Button onClick={signInUsingGoogle } className="ms-3" variant="primary">
                    Google Login
                </Button>
            </Form>
            <Link to="/register">
                <h5 className="mt-3 text-center">Register ?</h5>
            </Link>
        </div>
    );
};

export default Login;