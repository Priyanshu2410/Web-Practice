import React from "react";

import Navbar from "./first/components/navbar";
import Maincont from "./first/components/main";

export default function App(){
    return(
        <div className="container">
            <Navbar />
            <Maincont />
        </div>
    )
}