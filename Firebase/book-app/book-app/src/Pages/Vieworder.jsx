import React,{useEffect,useState} from "react";
import {useFirebase} from "../context/firebase";
import Bookcard from "../component/Card";
import Row from 'react-bootstrap/Row';

const Vieworder = () => {
    const firebase = useFirebase();
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        if(firebase.isLoggedin)
        {
            firebase.fetchMybook(firebase.User.uid)?.then((books) => setBooks(books.docs) );
        }   
    },[firebase])
    if(!firebase.isLoggedin) return <div>Not Logged in</div>
    return (
        <div className="container mt-5">
            <Row xs={1} md={2} className="g-4">
                {books.map((book) => (
                    <Bookcard link={`/books/orders/${book.id}`} key={book.id} id={book.id} {...book.data()} /> 
                    
          ))}
          </Row>
        </div>
    );
}
 export default Vieworder;