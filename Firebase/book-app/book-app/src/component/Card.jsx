import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from "../context/firebase";
const MyCard = (props) => {
    const firebase = useFirebase();
    const [url, setUrl] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        firebase.getImageUrl(props.imageUrl).then((url) => setUrl(url));
    }, [firebase, props.imageUrl])
    return (
        <Card style={{ width: '18rem', margin:'25px' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    This book has a title {props.name} and this book is sold by {props.displayName} and the price of this book is {props.price}.
                </Card.Text>
                <Button onClick={e=>navigate(props.link)} variant="primary">View details</Button>
            </Card.Body>
        </Card>
    )

}

export default MyCard;