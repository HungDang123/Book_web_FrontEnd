import './App.css';
import React from 'react';
import Navbar from "./layouts/Header-Footer/Navbar";
import Footer from "./layouts/Header-Footer/Footer";
import Coupon from "./layouts/Homepage/Component/Coupon";
import HomePage from "./layouts/Homepage/HomePage";
import { getAllBook } from './api/BookAPI';

function App() {
    getAllBook().then().catch();
    return (
        <div className="App">
            <Navbar></Navbar>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
}

export default App;
