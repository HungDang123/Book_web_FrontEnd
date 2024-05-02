import './App.css';
import React, { useState } from 'react';
import Navbar from "./layouts/Header-Footer/Navbar";
import Footer from "./layouts/Header-Footer/Footer";
import HomePage from "./layouts/Homepage/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetail from "./layouts/DetailsProduct/BookDetail";
import { findByID } from './api/BookAPI';
import Book from './Models/Book';
import Login from './layouts/Login/Login';

function App() {
    const [keySearch, setKeySearch] = useState('');   
     
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar keySearch={keySearch} setKeySearch={setKeySearch}></Navbar>
                <Routes>
                    <Route path='/' element={<HomePage keySearch={keySearch}></HomePage>} />
                    <Route path='/books/:bookId' element={<BookDetail/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
