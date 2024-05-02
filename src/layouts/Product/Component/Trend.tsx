import React, { useEffect, useState } from "react";
import BookProps from "./BookProps";
import Book from "../../../Models/Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllBook, search } from "../../../api/BookAPI";



const Trend: React.FC = () => {
    const [listBook, setListBook] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let [size, setSize] = useState(5)
    useEffect(() => {
            getAllBook(size)
                .then(
                    books => {
                        setListBook(books)
                        setLoading(false);
                    }
                )
                .catch(
                    error => {
                        setError(error);
                    }
                )
    }, [] // chi goi 1 lan
    )

    const viewMore = () => {
        setSize(size += 5)
        getAllBook(size)
            .then(
                books => {
                    setListBook(books)
                    setLoading(false);
                }
            )
            .catch(
                error => {
                    setError(error);
                }
            )
    }
    if (loading) {
        return (
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
            </div>
        )
    }
    return (
        <div>
            <div className="xuhuongmuasam-header">
                <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png"
                    className="center_center" />
                <span className="xuhuongmuasam-header-title">XU HƯỚNG MUA SẮM</span>
            </div>
            <div className="xuhuongmuasam-cate">
                <div className="xuhuongmuasam-cate-item xuhuongmuasam-cate-item-active">
                    Xu huớng theo ngày
                </div>
                <div className="xuhuongmuasam-cate-item">
                    Sách HOT, giảm sốc
                </div>
                <div className="xuhuongmuasam-cate-item">
                    Bestseller ngoại văn
                </div>
            </div>

            <div className="block_line">
                <div></div>
            </div>
            <div className="xuhuongmuasam-container">
                {listBook.map((book: Book) => (
                    <BookProps key={book.id} book={book}></BookProps>
                ))}
            </div>
            <div className="center_center">
                <a className="xuhuongmuasam-xemthem" onClick={viewMore}>Xem thêm</a>
            </div>
        </div>
    );
}

export default Trend