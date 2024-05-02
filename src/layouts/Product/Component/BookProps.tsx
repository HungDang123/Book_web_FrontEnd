import React, { useEffect, useState } from "react";
import Book from "../../../Models/Book";
import { getAllImage } from "../../../api/ImageAPI";
import { Image } from "../../../Models/Image";
import { Link } from "react-router-dom";

interface BookProps {
    book: Book;
}

const BookProps: React.FC<BookProps> = (props) => {
    const BookId: string = props.book.id;
    const [listImage, setListImage] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllImage(BookId)
            .then(
                imageData => {
                    setListImage(imageData)
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
    
    if (loading) {
        return (
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
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
        <div className="xuhuongmuasam-container-item">
            <div className="xuhuongmuasam-container-item-image">
                <Link to={`books/${props.book.id}`}>
                    {listImage[0].url && <img src={listImage[0].url} alt={props.book.bookName} />}
                </Link>
                <div className="new-label-pro-sale">
                    <span>{Math.round((1 - (props.book.price / props.book.originalPrice)) * 100)}%
                    </span>
                </div>
            </div>
            <Link to={`books/${props.book.id}`}>
                <div className="product-info">
                    <span className="product-name">{props.book.bookName}</span>
                    <span className="xuhuongmuasam-price-special">{props.book.price} VNĐ</span>
                    <span className="xuhuongmuasam-price-old">{props.book.originalPrice} VNĐ</span>
                </div>
            </Link>
            <div className="ratingbox">
                <div className="rating">
                    <div style={{ width: '33%' }} className="rating-item"></div>
                </div>
                <span className="rating-count">(1)</span>
            </div>

            <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }}></div>
                <span className="progress-label">Đã bán 12</span>
            </div>

        </div>
    )
}

export default BookProps