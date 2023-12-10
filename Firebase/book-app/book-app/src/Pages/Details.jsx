import React,{useEffect,useState} from "react";
import  Button  from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import Form from 'react-bootstrap/Form';



const Details = () => {
    const params = useParams();
    const firebase = useFirebase();
    const [book,setBook] = useState(null);
    const [url, setUrl] = useState(null);
    const [qty, setQty] = useState(1);
    useEffect(() => {
        firebase.getbookbyid(params.bookId).then((value) => setBook(value.data()));
    }, [firebase,params.bookId]);
    console.log(params);
    useEffect(() => {
        if(book){
            firebase.getImageUrl(book.imageUrl).then((url) => setUrl(url));
        }
    },[book,firebase] )
    const placeorder=async () =>{
        const result = await firebase.placeorder(params.bookId,qty);
        console.log(result);
        alert("Order Placed");
    }
    if (!book) return <div>Loading...</div>;
  
  return <div>
    <div className="container mt-3">
        <h1>{book.name}</h1>
        <h3>ISBN : {book.isbnnumber}</h3>
        <img src={url} alt="book cover" width="40%" style={{borderRadius:'15px'}} />
        <h4 className="mt-3">Price : Rs.{book.price}</h4>
        <h4 className="mt-3">Seller : {book.displayName}</h4>
        <h4 className="mt-3">Seller Email : {book.userEmail}</h4>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h4>Enter your Qty :-</h4>
                    <Form.Control type="number" placeholder="Qty" onChange={(e)=> setQty(e.target.value)} value={qty}/>
                </Form.Group>
        <Button variant="success" className="mt-3" onClick={placeorder}>Buy Now</Button>
        </div>
  </div>;
};

export default Details;