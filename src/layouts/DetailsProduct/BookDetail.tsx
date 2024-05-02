import React, { useEffect, useState } from "react";
import Detail from "./Component/Detail";
import ProductRelatedComponent from "./Component/ProductRelate";
import Info from "./Component/Info";
import Feedback from "./Component/Feedback";
import { useParams } from "react-router-dom";
import { parse } from "path";
import { findByID } from "../../api/BookAPI";
import Book from "../../Models/Book";
import Author from "../../Models/Author";
import { getAllAuthor } from "../../api/AuthorAPI";

const BookDetail: React.FC = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState<Book | null>(null)
    const [author, setAuthor] = useState<Author[]>([])
    useEffect(() => {
        if (bookId) {
            findByID(bookId.toString())
                .then((data: Book | null) => {
                    if (data) {
                        setBook(data);
                    } else {
                        console.error("Book not found");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching book:", error);
                });
            getAllAuthor(bookId?.toString())
                .then((author) => {
                    setAuthor(author);
                })
        }
    }, [bookId]);
    return (
        <div>
            {book && <Detail book={book} author={author} />}
            <ProductRelatedComponent />
            {book && <Info book={book} author={author} />}
            <Feedback />
        </div>
    );
}

export default BookDetail