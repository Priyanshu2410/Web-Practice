import React, { useEffect, useState } from "react";
import Bookcard from "../component/Card";

import { useFirebase } from "../context/firebase";
import Row from 'react-bootstrap/Row';

const Home = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listallbooks().then((books) => setBooks(books.docs));
    }, [firebase]);

    return (
        <div className="container mt-5">
             <Row xs={1} md={2} className="g-4">
                {books.map((book) => (
                    <Bookcard link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()} /> 
                    
          ))}
          </Row>
         
        </div>
    );
};

export default Home;