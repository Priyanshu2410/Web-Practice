import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from "../context/firebase";

const List = () => {
    const firebase = useFirebase();
    const [name , setName] = useState("");
    const [isbnnumber , setIsbnnumber] = useState("");
    const [price , setPrice] = useState("");
    const [coverpic , setCoverpic] = useState("");
    const handelsubmit =async (e) => {
        e.preventDefault();
        await firebase.addlist(name,isbnnumber,price,coverpic);
        alert('Book listed successfully')
    };
    return(
        <div className="container mt-5"> 
            <Form onSubmit={handelsubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter book name"
                    onChange={(e)=> setName(e.target.value)} value={name} />
                   
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Isbn number </Form.Label>
                    <Form.Control type="number" placeholder="isbn number" onChange={(e)=> setIsbnnumber(e.target.value)} value={isbnnumber}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Price </Form.Label>
                    <Form.Control type="number" placeholder="Enter price" onChange={(e)=> setPrice(e.target.value)} value={price}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Upload cover pic</Form.Label>
                    <Form.Control type="file"  onChange={(e)=> setCoverpic(e.target.files[0])} />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    List your book
                </Button>
               
            </Form>
        </div>
    );
}

export default List;