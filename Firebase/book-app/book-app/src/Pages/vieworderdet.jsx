import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useFirebase } from "../context/firebase";

const Vieworderdet = () => {
    const Params = useParams();
    const firebase = useFirebase();
    const [order, setOrder] = useState([]);

    useEffect(() => {
         
            firebase.getorder(Params.bookId)
                .then((order) => setOrder(order.docs))
                
        
    }, [Params, firebase]);
    

    return (
        <div>
            <h1>Your orders</h1>
            
            
            {order.map((test) => {
                const data = test.data();
                return (
                    <div className="m-5 p-5" style={{border : '1px solid'}}>
                        <h4>Order by : {data.displayName}</h4>
                        <h4> Qty : {data.qty}</h4>
                        <h4> Email : {data.userEmail}</h4>
                        
                        

                        </div>
                )
            })}
        </div>
    );
}

export default Vieworderdet;
