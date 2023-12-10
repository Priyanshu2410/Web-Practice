import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useFirebase} from "../context/firebase";


const Register = () => {
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
       const result= await firebase.signupuseremailandpswd(email,password);
       alert("user created");
       console.log(result);

    }
    return (
        <div className="container mt-5"> 
            <Form onSubmit={handelsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={(e)=> setEmail(e.target.value)} value={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register;