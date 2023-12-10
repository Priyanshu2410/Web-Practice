import "bootstrap/dist/css/bootstrap.min.css";

// pages

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./component/Navbar";
import Listpage from "./Pages/List";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Vieworder from "./Pages/Vieworder";
import Vieworderdet from "./Pages/vieworderdet";

// css
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/list" element={<Listpage />} />
        <Route path="/book/view/:bookId" element={<Details />} />
        <Route path="/book/orders" element={<Vieworder />} />
        <Route path="/books/orders/:bookId" element={<Vieworderdet />} />

      </Routes>
    </div>
  );
}

export default App;
