import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useFirebase} from "../context/firebase";


const Login = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

    useEffect(() => {
        if(firebase.isLoggedin) {
            navigate("/")
        }
    }, [firebase,navigate])

    const handelsubmit = async(e) => {
        e.preventDefault();
       const result= await firebase.loginuseremailandpswd(email,password);
       alert("login success");
       

    }
    return (
        <div className="container mt-5"> 
            <Form onSubmit={handelsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={(e)=> setEmail(e.target.value)} value={email} />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    login
                </Button>
                <h3 className="mt-3">Or</h3>
                <Button className="mt-3 " variant="danger" onClick={firebase.signinwithgoogle}>Signin with Google</Button>
            </Form>
        </div>
    )
}

export default Login;